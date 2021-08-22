import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  continue:boolean =true;
  password1:string=null;
  password2:string=null;
  password:boolean =false;
  constructor(public UserServisService: UserServisService, private router: Router) { }

  ngOnInit(): void {
  }
 
  AddUser(){
    if (this.password1==this.password2) {
      this.UserServisService.user.password= this.password1;
       this.UserServisService.add();
       this.UserServisService.logInById(this.UserServisService.user.idNumber, this.password1);
       this.continue =false;
       this.UserServisService.userLogIn = true;
    } else {
      this.password1=null;
      this.password2=null;
      alert('Password not the same');
    }
    
  }
}
