import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import {UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-gat-all-users',
  templateUrl: './gat-all-users.component.html',
  styleUrls: ['./gat-all-users.component.css']
})
export class GatAllUsersComponent implements OnInit {
  users:UserModel[]=[];
  print= false;

  constructor(private UserServisService : UserServisService, private router: Router) {
    if (localStorage.getItem("user")) {        
      if (UserServisService.user.roleNumber>100) {

        this.getAllUser();
      } else {
        alert("משתמש לא מורשה");
        this.router.navigate(['/front-page']);
      }
   } 
    else{
      alert("You need to register ");
      this.router.navigate(['/log-in']);
    }
   }

  ngOnInit(): void {
  }
  getAllUser(){
    
    this.UserServisService.getAllUser().subscribe(
      data=>{ this.users= data, console.log("list all users!!!   ", data);})
      this.print =true;
      
      
    console.log('component all users');
    
  }

}
