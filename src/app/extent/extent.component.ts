import { Component, OnInit } from '@angular/core';
import { ExtentService } from '../extent.service';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-extent',
  templateUrl: './extent.component.html',
  styleUrls: ['./extent.component.css']
})
export class ExtentComponent implements OnInit {

  thank = '感 謝 您 協 助 我 們 改 善 服 務 !';
  Ethank = 'Thank you for your feedback !';


  /*constructor(private extentService: ExtentService) {}*/

 /**showSN(){
      this.extentService.getSN()
       .subscribe((data:Extent) => this.extent = {
        id:data[5],
        Snumber:data[5]
      });
  }*/

  ngOnInit() {
  }

}
