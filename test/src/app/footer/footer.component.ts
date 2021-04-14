import { Component, EventEmitter, OnInit, Output } from '@angular/core';
 
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Output() sendToParent = new  EventEmitter();
  constructor(private commonService:CommonService) {
    this.commonService.pushMessage.subscribe(msg=>{
      console.log("in footer component",msg);
    })
   }

  ngOnInit(): void {
  }
  clickToSendParent(){
    let obj  = {"name":"person name","age":"11"};
    this.sendToParent.emit(obj);
  }

}
