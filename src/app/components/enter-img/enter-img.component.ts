import { Component, Input, OnInit } from '@angular/core';
 import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { UserServisService } from '../../servis/user-servis.service';

@Component({
  selector: 'app-enter-img',
  templateUrl: './enter-img.component.html',
  styleUrls: ['./enter-img.component.css']
})
export class EnterImgComponent implements OnInit {
  continue:boolean =false;
  
  urlImg:string=null;
  numberImg:number= null;
   constructor(public UserServisService: UserServisService, private router: Router, private storge:AngularFireStorage) { }
  
  ngOnInit(): void {
  }
  enterImg(e){
    console.log('upload');
    this.numberImg =this.numberImg + (Math.floor(Math.random()*10000000))
    console.log(this.numberImg);
    
       this.storge.upload( "imgUser.img" + this.numberImg  ,e.target.files[0]) 
           
      //  this.router.navigate(['/app-password']);   
    }
    downlode(){
      this.storge.ref( "imgUser.img" + this.numberImg).getDownloadURL().subscribe(
        data=> {
         
          this.urlImg=data;
          this.UserServisService.user.img= this.urlImg,
          console.log(this.UserServisService.user);
      } ) 
    }
  
  enterLinkImg(){
    if (this.urlImg != null  ) {    
     this.UserServisService.user.img=  this.urlImg;
     this.router.navigate(['/app-password']);
   } 
   else {
     alert('יש להכניס תמונה');
     this.urlImg =null;
   }
  }
 
}

