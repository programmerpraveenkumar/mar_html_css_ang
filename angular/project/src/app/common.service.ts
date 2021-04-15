import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {APP_CONSTANTS} from '../APP_CONSTANTS';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
GETHTTP(url){
  return this.http.get(APP_CONSTANTS.API_ENDPOINT+url);
}
POSTHTTP(url,param){
  return this.http.post(APP_CONSTANTS.API_ENDPOINT+url,param);
}
isUserLoggedIn(){
 let val =  localStorage.getItem("user_id");
 if(val == null || val == ""){
   return false;
 }else{
   return true;
 }
}
createPromise(){
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('I promise to return this after 1 second!');
        //reject("this is error");
      }, 1000);
  })
}
  createObservable(){ 
    return new Observable(res=>{
      setTimeout(function() {
       res.next("from observable...");//success 
      // res.next("from observable 2...");//success 
     // res.error("error from observable");
      },1500);
    // res.error("some error");//fail
    })
  }
}
