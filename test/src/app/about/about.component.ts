import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  allTodos = [];
  userName = "";
  userJob = "";
  constructor(private httpObj:HttpClient,private common:CommonService) {
     
  }

  ngOnInit(): void {
  }
  messageAlert(){
    this.common.showAlert("this is from about service") 
   }
   sendMessageViaPubSub(){
    this.common.publishMessageToComponent("message to all subscribers from about component.");
   }
  getJsonResponse(){
    //
    this.httpObj.get("https://jsonplaceholder.typicode.com/todos/1").
    subscribe((res)=>{
      console.log(res);
    })
  }
  getAllTodos(){
    //https://jsonplaceholder.typicode.com/todos/
    this.httpObj.get("https://jsonplaceholder.typicode.com/todos").subscribe((res:any)=>{
      this.allTodos = res;
    })
  }
  createUSER(){
      let obj = {
        "name": this.userName,
        "job": this.userJob
      }
    this.httpObj.post("https://reqres.in/api/users",obj).subscribe((res:any)=>{
      console.log(res);
      this.userName = '';
      this.userJob = '';
    })
  }

}
