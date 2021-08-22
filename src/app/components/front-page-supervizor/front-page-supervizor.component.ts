import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { CompleteTest, testModel } from 'src/app/models/test.model';
import { UserModel } from 'src/app/models/user.model';
import { TestService } from 'src/app/servis/test.service';
import { UserServisService } from 'src/app/servis/user-servis.service';

@Component({
  selector: 'app-front-page-supervizor',
  templateUrl: './front-page-supervizor.component.html',
  styleUrls: ['./front-page-supervizor.component.css']
})
export class FrontPageSupervizorComponent implements OnInit {
  user: UserModel;
  users:UserModel[]=[];
  tests : testModel[]=[];
  test:CompleteTest;
  constructor(public testServis: TestService, public userServise:UserServisService, private router: Router, private storge: AngularFireStorage) { 
    this.user= JSON.parse( localStorage.getItem("user"))
    this.getAllUserBySupervizor();
    this.getTest();
  }

  ngOnInit(): void {
  }
  getAllUserBySupervizor(){
    
    this.userServise.getAllUserBySupervizor(this.user.name).subscribe(
      data=>{ this.users= data, console.log("list all users!!!   ", data);})
      
      
      
    console.log('component all users');
    
  }
  getTest(){
    console.log("getTest(): ", this.userServise.user.name );
    
    this.testServis.getTest(this.userServise.user.name).subscribe(
     data=>{ this.tests= data, console.log("list all users!!!   ", data);})

  }
  testScore(idNumber:number,profession:String){
     this.testServis.testScore(idNumber,this.userServise.user.name,profession).subscribe(
       data=>{
        this.test = data;
        if (this.test.score) {
         return this.test.score
       }
       else
         return "NON"
       }
     )

  }
}
