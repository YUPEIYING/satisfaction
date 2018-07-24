import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  number5 = '非常滿意';
  number4 = '滿意';
  number3 = '普通';
  number2 = '不滿意';
  number1 = '非常不滿意';

  constructor() { }

  ngOnInit() {
  }

}
