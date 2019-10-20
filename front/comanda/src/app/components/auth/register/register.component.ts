import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ComandaService } from 'src/app/services/comanda.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: any;
  registerForm: FormGroup;
  error: string = null;
  showingSpinner: boolean = false;
  onHasRegistered: EventEmitter<any>;
  constructor(private formBuilder: FormBuilder, 
    private localStorage: LocalStorageService,
    private comandaService: ComandaService, 
    private jwtHelper: JwtHelperService,
    private router: Router) {
    this.onHasRegistered = new EventEmitter<any>();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])]
    })
   }

  ngOnInit() {
  }

  Register()
  {

    let controls = this.registerForm.controls;
    this.error = null;
    if (this.registerForm.valid)
    {
      this.showingSpinner = true;
      let username = controls.username.value, password = controls.password.value;
      let bearer = null;
      let that = this;
      this.comandaService.Register(username, password).subscribe({
        next: function (response) {
           that.showingSpinner = true; 
           bearer = response;
        },
        complete: function () {
           that.showingSpinner = false;
           try
           {
            that.jwtHelper.decodeToken(bearer);
            that.SaveBearerAndRetrieveUser(bearer);
           }
           catch(error)
           {
             that.error = bearer;
           }
        },
        error: function (error) { console.error(error) }
      });
    }
    else
    {
      this.error = "Por favor llena todos los campos";
    }
  }

  SaveBearerAndRetrieveUser(token: string)
  {
    console.log(token);
    //let jwtHelper = new JwtHelperService();
    console.log(this.jwtHelper.tokenGetter());
    if (!this.jwtHelper.isTokenExpired(token))
    {
      this.localStorage.SetToken(token);
      console.log("decoding token", this.jwtHelper.decodeToken(token));
      this.user = this.jwtHelper.decodeToken(token).data;
      this.onHasRegistered.emit(this.user);
    }
    this.router.navigate(['/']);
  }
}
