import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-user',
  templateUrl: './print-user.component.html',
  styleUrls: ['./print-user.component.css']
})
export class PrintUserComponent implements OnInit {
@Input() i; 
MoreInfo:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }
  clickMoreInfo() {
    if (this.MoreInfo) {
      this.MoreInfo = false;
    }
    else{
      this.MoreInfo = true;
    }
  }
}
