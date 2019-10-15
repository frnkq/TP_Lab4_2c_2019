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
  loginForm: FormGroup;
  showingSpinner: boolean = false;
  user: any;
  @Output() onHasLoggedIn: EventEmitter<any>;
  constructor(private comandaService: ComandaService,
    private localStorage: LocalStorageService, private formBuilder: FormBuilder)
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
    if (this.loginForm.valid)
    {
      let username = controls.username.value, password = controls.password.value;
      let bearer;
      let that = this;
      this.comandaService.Login(username, password).subscribe({
        next: function (response) { that.showingSpinner = true; bearer = response; },
        complete: function () { that.showingSpinner = false; that.SaveBearerAndRetrieveUser(bearer) },
        error: function (error) { console.error(error) }
      });
    }
    // let username, password;
    // let bearer;
    // let that = this;
    // this.comandaService.Login(username, password).subscribe({
    //   next: function (response) { that.showingSpinner = true; bearer = response; },
    //   complete: function () { that.showingSpinner = false; that.SaveBearerAndRetrieveUser(bearer) },
    //   error: function (error) { console.error(error) }
    // });
  }

  SaveBearerAndRetrieveUser(token: string)
  {
    console.log(token);
    let jwtHelper = new JwtHelperService();
    if (!jwtHelper.isTokenExpired(token))
    {
      this.localStorage.SetToken(token);
      console.log("decoding token", jwtHelper.decodeToken(token));
      this.user = jwtHelper.decodeToken(token).data;
      this.onHasLoggedIn.emit(this.user);
    }
  }
}
