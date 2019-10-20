import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'auth', component: AuthPageComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
