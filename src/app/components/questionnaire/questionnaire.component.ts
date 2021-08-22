import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  age=null;
  city=null;
  country=null;
  graduation_year=null;
  academic_institution=null
  
  constructor(public UserServisService: UserServisService, private router: Router) { }

  ngOnInit(): void {
  }

  Update() {
    console.log("add");
    
    if (this.age && this.city && this.country && this.graduation_year && this.academic_institution) {
      this.UserServisService.user.age = this.age;
      this.UserServisService.user.city = this.city;
      this.UserServisService.user.country = this.country;
      this.UserServisService.user.graduation_year = this.graduation_year;
      this.UserServisService.user.academic_institution= this.academic_institution;
      console.log("THIS: ", this.UserServisService.user);
      this.router.navigate(['/questionnaire2']);
      }
      else{
        alert("יש למלא את כל השדות")
      }

  }
}
