import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  people = [
    {'name':"eleven",'age':11},
    {'name':"Ten",'age':10},
    {'name':"nine",'age':9},
    {'name':"a12",'age':12},
    {'name':"thirteen",'age':13},
    {'name':"four",'age':14},
    {'name':"five",'age':15},
    {'name':"fivefive",'age':55},
    {'name':"fivefivefive",'age':555},
    {'name':"six",'age':16}
  ];
  ageValue:number;
  colorName="";
  numbers= [1,2,3,4,5];
  
    name = "this is from Home component variable"
    heading = "this is for h1";
    message:any = "";
    currentDate = new Date();
    name1 = "";
    name2 = "";
    showContentText = false;
    showHide = false;
    type="password";
    classlist = "red"
    constructor(private common:CommonService) {
     
     }
     showAlert(){
       //this.common.showAlert("this is from home service");
       this.common.publishMessageToComponent("message to all subscribers from home component.");
     // this.common.pushMessage.next("test");
       }
     showName(obj){
      alert(obj.name+" and his age is "+obj.age);
     }
  ngOnInit(): void {
  }
  showContent(){
   this.showContentText = (this.showContentText)?false:true;
  }
  showpassword(){
   // this.type="text";
    this.type =  (this.type == "text")?"password":"text";
  }
  sampleFunction(){
    console.log(this.name1);
    // if(this.message == ""){
    //   this.message = "this is for alerts";
    // }else{
    //   this.message = "";
    // }

    this.message =  (this.message == "")?"this is for alerts":"";
    //localStorage.setItem
  }

}
