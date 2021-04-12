import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()parentMessage;
  @Input()parentMessage2;
 
  constructor(private commonService:CommonService) 
  { 
    this.commonService.pushMessage.subscribe(msg=>{
    console.log("in header component",msg);
  })
}

  ngOnInit(): void {
  }

}
