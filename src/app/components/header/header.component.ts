import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user :UserModel;
  constructor(public UserServisService: UserServisService, private router: Router) { 
    if (localStorage.getItem("token")!=null){
      this.user= JSON.parse( localStorage.getItem("user"))
      console.log("HeaderComponent: ", this.user);     
      
    }
    
  }

  ngOnInit(): void {
   
  }

  logOut(){
    this.UserServisService.userLogIn = false;
    localStorage.clear();
    this.UserServisService.user = {
      name: null,
      idNumber: null,
      Idpassport: null,
      phonNumber: null,
      email: null,
      password: null,
      img: null,
      age: null,
      city: null,
      country: null,
      graduation_year: null,
      academic_institution: null,
      medical_institution: null,
      residency: null,
      department: null,
      mySupervizor :null,
      role:'intern',
      
    }

    this.router.navigate(['/'])
  }
  frontPage(){
    if (this.UserServisService.user.roleNumber==100) {
      this.router.navigate(['/front-page'])
    }
    if (this.UserServisService.user.roleNumber>100) {
      this.router.navigate(['/front-page-supervizor'])
    }
  }
  
}
