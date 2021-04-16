import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { APP_CONSTANTS } from 'src/APP_CONSTANTS';
@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  isLoginPage = false;
  username= "";
  password = "";
  constructor(private router:Router, private route: ActivatedRoute,private cService:CommonService) { }

  ngOnInit(): void { this.route.params.subscribe(params => {
      this.isLoginPage = (params['type'] == "register")?false:true;
    });
   
  }

  loginValidation(){
    if(this.username == ''){
      alert("Username should not be empty");
      return;;
    }
    if(this.password == ''){
       alert("Password shuld not be empty");
      return;;
    }
    this.cService.loginValidation(this.username,this.password).subscribe(
      res=>{
        alert("login success");
        localStorage.setItem(APP_CONSTANTS.USER_ID_TOKEN,"1"); //store te token
        this.router.navigate(['home']);//navigation to home page
      },err=>{
        alert("please check username and password");
      }
    )
    //loginValidation
  }

}
