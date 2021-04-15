import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'; 
import { RouterModule, Routes } from '@angular/router';
 
import { LoginRegisterComponent } from './login-register/login-register.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginRegisterComponent }, 
  { path: 'login_register/:type', component: LoginRegisterComponent },
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
