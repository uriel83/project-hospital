import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserServisService } from 'src/app/servis/user-servis.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: UserModel;
  viaMail: boolean = false;
  viaIdNumber: boolean = true;
  idNumber: number = null;
  email: string = null;
  password: string = null;
  constructor(public UserServisService: UserServisService, private router: Router) { }

  ngOnInit(): void {
  }
  LoginVia() {
    if (this.viaMail) {
      this.viaMail = false;
      this.viaIdNumber = true
    }
    else {
      this.viaMail = true;
      this.viaIdNumber = false;
    }
  }


  logInById() {

    this.UserServisService.logInById(this.idNumber, this.password).subscribe((data) => {
     console.log("tttt");
     
      
      if (data != null) {
        console.log("UserServisService.logInById: data: " + data);
        this.UserServisService.user= JSON.parse( localStorage.getItem("user"))
        this.UserServisService.userLogIn = true;
        this.idNumber = null;
        this.password = null;
        switch (this.UserServisService.user.roleNumber) {
          case 100:
            this.router.navigate(['/front-page'])
            break;
            case 200:
              this.router.navigate(['/front-page-supervizor'])
              break;
             case 300:
              this.router.navigate(['/app-gat-all-users'])
              break;
          default:
            this.router.navigate(['/'])
            break;
        }
        // this.router.navigate(['/front-page'])
      }
      console.log(localStorage.getItem("token"));
    },err => {
          alert("משתמש לא קיים")
          this.idNumber = null;    
          this.password = null;
    })
       
  }


  logInByEmail() {

    this.UserServisService.logInByEmail(this.email, this.password);
    var token = localStorage.getItem("token");

    if (token != null) {
      this.router.navigate(['/front-page'])
    }
    this.email = null;
    this.password = null;
  }
  continue() {
    if (localStorage.getItem("user") != null) {
      this.router.navigate(['/front-page'])
    }
  }
}
