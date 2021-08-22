import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class REGISTERComponent implements OnInit {

  IdNumber = null;
  name = null;
  IdPassport = null;
  PhonNumber = null;
  email = null;





  constructor(private UserServisService: UserServisService, private router: Router) { }

  ngOnInit(): void {



  }

  AddUser() {
    console.log("add");
    
    if (this.IdNumber && this.name && this.IdPassport && this.PhonNumber && this.email) {
      this.UserServisService.user.idNumber = this.IdNumber;
      this.UserServisService.user.name = this.name;
      this.UserServisService.user.Idpassport = this.IdPassport;
      this.UserServisService.user.phonNumber = this.PhonNumber;
      this.UserServisService.user.email= this.email;
      this.router.navigate(['/token-bace']);
      }
      else{
        alert("יש למלא את כל השדות")
      }

  }
    
    
  

}