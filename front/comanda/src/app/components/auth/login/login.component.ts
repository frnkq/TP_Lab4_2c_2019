import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ComandaService } from 'src/app/services/comanda.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit
{
  user: any;
  @Output() onHasLoggedIn: EventEmitter<any>;

  loginForm: FormGroup;
  error: string = null;

  showingSpinner: boolean = false;

  constructor(private comandaService: ComandaService,
    private localStorage: LocalStorageService, private formBuilder: FormBuilder,
    private jwtHelper: JwtHelperService)
  {
    this.onHasLoggedIn = new EventEmitter<any>();
    this.loginForm = this.formBuilder.group({
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

  ngOnInit()
  {
  }

  Login()
  {
    let controls = this.loginForm.controls;
    this.error = null;
    if (this.loginForm.valid)
    {
      this.showingSpinner = true;
      let username = controls.username.value, password = controls.password.value;
      let bearer = null;
      let that = this;
      this.comandaService.Login(username, password).subscribe({
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
      this.onHasLoggedIn.emit(this.user);
    }
  }
}
