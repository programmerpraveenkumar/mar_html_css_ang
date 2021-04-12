import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private commonService:CommonService) {
    this.commonService.pushMessage.subscribe(msg=>{
      console.log("in footer component",msg);
    })
   }

  ngOnInit(): void {
  }

}
