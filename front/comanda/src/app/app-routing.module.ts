import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { EmpleadosPageComponent } from './pages/empleados-page/empleados-page.component';
import { SocioGuard } from './guards/socio.guard';
import { ReportesPageComponent } from './pages/reportes-page/reportes-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'auth', component: AuthPageComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'admin', 
    canActivate: [SocioGuard],
    children: [
      { path: 'empleados', component: EmpleadosPageComponent },
      { path: 'reportes', component: ReportesPageComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
