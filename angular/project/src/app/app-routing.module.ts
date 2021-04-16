import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'; 
import { RouterModule, Routes } from '@angular/router';
 
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CreatepostComponent } from './createpost/createpost.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginRegisterComponent }, 
  { path: 'login_register/:type', component: LoginRegisterComponent },
  {path:'create_post',component:CreatepostComponent}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
