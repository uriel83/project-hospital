import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import {UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-gat-user',
  templateUrl: './gat-user.component.html',
  styleUrls: ['./gat-user.component.css']
})
export class GatUserComponent implements OnInit {
  @Input() i;
 
  UserName:string = '';
  idNumber:number =null;
  user:UserModel[]=[];
  search:boolean=true;
  constructor(private UserServisService : UserServisService) { }

  ngOnInit(): void {
  }
  
  getUserByName(){
    console.log(this.UserName);
    
    if (this.UserName != '') {
      this.UserServisService.getUserByName(this.UserName).subscribe(
        Data=>{this.user=Data, console.log("user is!!!   " , Data);}
      )
    }
    this.search=false;

  }
  getUserByIdNumber(){
    console.log(this.idNumber);
    
    if (this.idNumber != null) {
      this.UserServisService.getUserByIdNumber(this.idNumber).subscribe(
        Data=>{this.user=Data, console.log("user is!!!   " , Data);}
      )
    }
    this.search=false;

  }
  clickNewSearch(){
    delete(this.user);
    this.UserName ='';
    this.idNumber =null;
    this.search=true;
  }
}
