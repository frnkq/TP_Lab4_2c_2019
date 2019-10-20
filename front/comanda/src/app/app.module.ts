import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutButtonComponent } from './components/ui/logout-button/logout-button.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/ui/spinner/spinner.component'
import { JwtModule } from '@auth0/angular-jwt';
import { ActionsMenuComponent } from './components/actions-menu/actions-menu.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CaptchaComponent } from './components/ui/captcha/captcha.component';


export function tokenGetter()
{
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    UserInfoComponent,
    HeaderComponent,
    LogoutButtonComponent,
    SpinnerComponent,
    ActionsMenuComponent,
    AuthPageComponent,
    CaptchaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: "token",
        throwNoTokenError: true,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
