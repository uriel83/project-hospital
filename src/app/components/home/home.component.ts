import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServisService } from 'src/app/servis/user-servis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Interns:boolean = true;
  Supervisor:boolean = false;
  code:number=null;
  codeTest:boolean = false;
 
  
  constructor( private router: Router, private userServis: UserServisService) { 
    this.Interns = true;
    this.Supervisor = false;
    if (localStorage.getItem("token")!=null) {
      this.router.navigate(['/front-page'])
    }
  }

  ngOnInit(): void {
  }
  ClickSupervisor(){
    this.Interns = false;
    this.Supervisor = true;
    this.codeTest =true;
        
  }
  ClickInterns(){
    this.Interns = true;
    this.Supervisor = false;
    this.codeTest =false;
  }
  enterCode(){
      console.log("this.code: "+this.code);
    
    switch (this.code) {
      case 1234:
         this.userServis.user.role= 'supervisor';
         this.userServis.user.roleNumber= 200;
        console.log("welcome "+ this.userServis.user.role);
        this.codeTest =false;
        
        break;
        case 5555:
          this.userServis.user.role= 'admin';
          this.userServis.user.roleNumber= 300;
          this.codeTest =false;
          break;
      default:
        this.userServis.user.role= 'intren';
        this.userServis.user.roleNumber= 100;
        this.codeTest =false;
        break;
    }
    
  }
 


}
