import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
title=""
content=""
  constructor(private router:Router,private cService:CommonService) { }

  ngOnInit(): void {
    if(!this.cService.isUserLoggedIn()){
      this.router.navigate(['']);//navigation to loginpage
    }
  }
  postContent(){
    if(this.content == ""){
      alert("Content sould not be emtpy");
      return;
    }
    if(this.title == ""){
      alert("Title sould not be emtpy");
      return;
    }
     
    let obj = {
      "id": Math.floor((Math.random() * 1000) + 1),
      "content":this.content,
      "title": this.title,
      "like": 0,
      "date_created": new Date()
  }
  this.cService.POSTHTTP("posts",obj).subscribe(res=>{
    alert("stored successfully");
    this.title = "";
    this.content = "";
    this.router.navigate(['/home']); //naviagte to home page
  },error=>{
    alert("Error while storing");
  })


  }

}
