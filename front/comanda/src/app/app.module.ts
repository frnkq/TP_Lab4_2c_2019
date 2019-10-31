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
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { EmpleadosListadoComponent } from './components/empleados-listado/empleados-listado.component';

import { TableModule } from 'primeng/table';
import { ReportesPageComponent } from './pages/reportes-page/reportes-page.component';
import { QuickloginComponent } from './components/ui/quicklogin/quicklogin.component';
import { OperacionesListadoComponent } from './components/operaciones-listado/operaciones-listado.component';
export function tokenGetter()
{
  return localStorage.getItem("bearer");
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
    EmpleadosPageComponent,
    EmpleadosListadoComponent,
    ReportesPageComponent,
    QuickloginComponent,
    OperacionesListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
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
