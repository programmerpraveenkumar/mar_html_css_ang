import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import {APP_CONSTANTS} from '../../APP_CONSTANTS';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
posts=[];
  constructor( private router:Router,private cService:CommonService,private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get(APP_CONSTANTS.API_ENDPOINT+"data.json").subscribe((res:any)=>{
    //     this.posts = res.posts;
    // })
    if(this.cService.isUserLoggedIn()){
      this.cService.GETHTTP("data.json").subscribe((res:any)=>{
        this.posts = res.posts;
    })
    }else{
      this.router.navigate(['']);//navigation to loginpage
  
    }
   
  }

}
