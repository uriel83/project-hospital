import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-questionnaire2',
  templateUrl: './questionnaire2.component.html',
  styleUrls: ['./questionnaire2.component.css']
})
export class Questionnaire2Component implements OnInit {
  next:boolean= false;
  medical_institution= null;
  residency= null;
  department= null;
  supervizors:any[]=[];
  constructor(public UserServisService: UserServisService, private router: Router) {
    this.getAllSupervizor()
  }

  ngOnInit(): void {

    
  }
Update() {
    console.log("add");
    
    if (this.medical_institution && this.residency && this.department  ) {
      this.UserServisService.user.medical_institution = this.medical_institution;
      this.UserServisService.user.residency = this.residency;
      this.UserServisService.user.department = this.department;
      console.log(this.UserServisService.user.residency);
      
      this.UserServisService.updateMailUser(this.UserServisService.user.idNumber,
                                            this.UserServisService.user.age,
                                            this.UserServisService.user.city,
                                            this.UserServisService.user.country,
                                            this.UserServisService.user.graduation_year,
                                            this.UserServisService.user.academic_institution,
                                            this.UserServisService.user.medical_institution,
                                            this.UserServisService.user.residency,
                                            this.UserServisService.user.department).subscribe(data=>{
                                            console.log("user update");
                                             
                                            })

      this.next= true;
      
      }
      else{
        alert("יש למלא את כל השדות")
      }

  }

  finsh(){
    this.router.navigate(['/front-page']);
  }
  getAllSupervizor(){
    
    this.UserServisService.getAllSupervizor().subscribe(
      data=>{ this.supervizors= data, console.log("list all Supervizors!!!   ", data);})
      
      
      
    console.log('component all supervizors');
    
  }
  select(suprvizor:any){
    this.medical_institution = suprvizor.medical_institution;
    this.UserServisService.user.mySupervizor = suprvizor.name;
    this.department = suprvizor.department;
    console.log("my supervizor" , this.UserServisService.user.mySupervizor);
    

    
console.log("user click");

  }
}
