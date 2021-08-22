import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { TestService } from 'src/app/servis/test.service';
import { UserServisService } from 'src/app/servis/user-servis.service';
import { Router } from '@angular/router';
import { testModel } from 'src/app/models/test.model';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
user: UserModel;
tests : testModel[]=[]; 
test:any;
creationDate:any;
uploaded:boolean=false;
end:boolean=false;
 fiveMinutes = 60 * 5;
 endTest :number;
  constructor(public testServis: TestService, public userServise:UserServisService, private router: Router, private storge: AngularFireStorage) { 
    this.user= JSON.parse( localStorage.getItem("user"))
    // this.creationDate = this.user.creation_date.getTime()
  }

  ngOnInit(): void {
    this.getTest()
  }
  getTest(){
    console.log("get test is up"); 
    this.testServis.getTest(this.userServise.user.mySupervizor).subscribe(
        data=>{ this.tests= data, console.log("list all tests!!!   ", data);})
  }
  downloadTest(test:testModel){
    this.test= test;
    if (this.uploaded) {
     
      this.uploaded=false;
    } else {
      this.uploaded=true;
      this.startTimer()
    }
   
 
    
  }
  uploadTest(test:testModel){
    // supervisor?: String,    
    // profession?: String,
    // urlCompleteTest?: String,
    // userId?: String,
    // score?: number,
    // remarks?:string,
    // StartTime?: number,
    // endTime?: number,
      

  }
  upload(){
    this.end=true;
    this.startTimer()
    this.testServis.completeTest.supervisor= this.test.supervisor;
    this.testServis.completeTest.profession= this.test.profession;
    this.testServis.completeTest.userId = this.userServise.user.idNumber;
    this.testServis.completeTest.StartTime = Date.now();
    this.endTest =this.testServis.completeTest.StartTime+ (1000 *60 *90) ;
    var linkFile=document.createElement('a');
    linkFile.href=this.test.urlTest;
    linkFile.setAttribute('target',"_blanck");
    linkFile.click();
  }
  
  enterTest(e){
    console.log("enter Test(e) is up ");
    
    this.storge.upload(this.userServise.user.idNumber + this.test.profession + "Test.pdf", e.target.files[0]);
    this.UploadCompleteTest()
    this.pauseTimer()

  }
  UploadCompleteTest(){
    console.log("Upload Complete Test is up ");
    
    this.storge.ref(this.userServise.user.idNumber + this.test.profession + "Test.pdf").getDownloadURL().subscribe(
            data => {
              console.log("data" , data);
              
              this.testServis.completeTest.urlCompleteTest = data;
              this.testServis.completeTest.endTime = Date.now();
            
              console.log("testServis.completeTest.urlCompleteTest: " ,this.testServis.completeTest.urlCompleteTest);
              this.testServis.UploadCompleteTest()
            },
            err=>{console.log("err" ,err);
            })
  //alert("upload  Test")
    }
 

  // Upload() {
  //   if ( this.profession && this.Superivisor) {
  //     console.log(this.urlTest , this.profession, this.Superivisor);
      
  //     this.testServis.test.Supervisor = this.Superivisor;  
  //     this.testServis.test.profession = this.profession;
  //     console.log(this.profession + "Test.pdf");

  //     this.storge.ref(this.profession + this.Superivisor + "Test.pdf").getDownloadURL().subscribe(
  //       data => {
  //         this.testServis.test.urlTest = data;
  //         console.log(this.testServis.test.urlTest);
  //         this.testServis.UploadNewTest()
  //       })
  //   }
  // }

  minuteTimeLeft: number = 89;
  SecondTimeLeft: number = 59;
  Second0: number;
  interval;

startTimer() {
  //declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout;
    this.interval = setInterval(() => {
      
            if(this.SecondTimeLeft > 0) {
              this.SecondTimeLeft--;
              if (this.SecondTimeLeft<10&&this.SecondTimeLeft>-1) {
                this.Second0=0;
              } else {
                this.Second0=undefined;
              }
            } else {
                if (this.minuteTimeLeft > 0) {
                  this.minuteTimeLeft--;
                  this.SecondTimeLeft = 59;
                } 
              }
              if (this.SecondTimeLeft==0 &&  this.minuteTimeLeft==0) {
                this.pauseTimer()
                 
              }
        
      
    
    },1000)
  }
   
  pauseTimer() {
    clearInterval(this.interval);
  }
  Cencel(){
    this.uploaded= false;
  }
}



   
    



