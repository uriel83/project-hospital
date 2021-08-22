import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { testModel } from 'src/app/models/test.model';
import { TestService } from 'src/app/servis/test.service';
import { UserServisService } from '../../servis/user-servis.service';
@Component({
  selector: 'app-upload-test',
  templateUrl: './upload-test.component.html',
  styleUrls: ['./upload-test.component.css']
})
export class UploadTestComponent implements OnInit {
  urlTest = ' ';
  profession :string;
  Superivisor :string;
  tests : testModel[]=[];  
  constructor(public testServis: TestService, private router: Router, private storge: AngularFireStorage,public userServise:UserServisService ) { }

  ngOnInit(): void {
    this.Superivisor=this.userServise.user.name;
  }

  async enterTest(e) {
    console.log('upload test');
    let flag = await this.storge.upload(this.profession + this.Superivisor + "Test.pdf", e.target.files[0]);
    
    this.Upload();
    this.profession= null;
  }

  Upload() {
    if ( this.profession && this.Superivisor) {
      console.log(this.urlTest , this.profession, this.Superivisor);
      
      this.testServis.test.Supervisor = this.Superivisor;  
      this.testServis.test.profession = this.profession;
      console.log(this.profession + "Test.pdf");

      this.storge.ref(this.profession + this.Superivisor + "Test.pdf").getDownloadURL().subscribe(
        data => {
          this.testServis.test.urlTest = data;
          console.log(this.testServis.test.urlTest);
          this.testServis.UploadNewTest()
        })
    }
  }
   getTest(){
     this.testServis.getTest(this.userServise.user.name).subscribe(
      data=>{ this.tests= data, console.log("list all users!!!   ", data);})

   }
}


