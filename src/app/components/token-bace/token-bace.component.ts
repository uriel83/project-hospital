import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import {UserServisService } from '../../servis/user-servis.service';
@Component({
  selector: 'app-token-bace',
  templateUrl: './token-bace.component.html',
  styleUrls: ['./token-bace.component.css']
})
export class TokenBaceComponent implements OnInit {
@ViewChild('a') focuseA: ElementRef;
code1:number[]=[];
code2:string='';
code:string='';
x:number = 0;
vision:boolean = true;

  constructor(public UserServisService : UserServisService, private router: Router) {
    this.createCode(); 
    
   }

  ngOnInit(): void {
    
  }
  next(event:Event){
    this.x++;
    if (this.x<4) {
      document.getElementById(""+this.x).focus();
    }
    if (this.x==4) {
      this.validation();
    }

    }

    createCode(){
      this.code='';
      for(var i=0; i<4;i++){
        this.code =this.code + (Math.floor(Math.random()*10))
      }
      console.log(this.code+'');
      
    }

    validation(){
      for (let i = 0; i < 4; i++) {
        this.code2= this.code2+ this.code1[i];
        
      }
      if(this.code== this.code2){
       
        this.vision = false;
        // this.router.navigate(['/enter-img']);

      }
      else{
        this.code= '';
          this.code2 = '';
          for (let i = 0; i < 4; i++) {
            this.code1[i]= null;      
          }
          
          this.createCode(); 
          alert("הקוד שהוקש אינו תואם");
      }
        
      
    }

}
