import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLogin = false;
  pushMessage = new BehaviorSubject<string>('');
  constructor() { }
  showAlert(message){
    alert(message);
  }
  publishMessageToComponent(message){
    this.pushMessage.next(message);//push message to all subsribers
  }
  setLOGIN(){
    //localstoreage.set
    //
    this.isLogin = true;
  }
}
