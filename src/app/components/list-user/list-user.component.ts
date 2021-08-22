import { Component, OnInit, NgModule } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import {UserServisService } from '../../servis/user-servis.service';





@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
users:any[]=[];
 print= false;
 stam = true;
  constructor(private UserServisService : UserServisService) {

   }

  ngOnInit(): void {
    //this.UserServisService.getuser('').subscribe((users:any) =>{this.users=users})
  }

  getAllUser(){
    
    this.UserServisService.getAllUser().subscribe(
      date=>{ this.users= date, console.log("list all users!!!   " + date),
       console.log(this.users[0]),console.log(this.users[1]);})
      this.print =true;
      
      
    console.log('component all users');
    
  }


}
