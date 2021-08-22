import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { CompleteTest, testModel } from '../models/test.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {
//urlTest:string= null;
test:testModel;
completeTest:CompleteTest;
private baseurl = 'http://localhost:5000/';

constructor(private httpClient: HttpClient) {
  this.test= {
    Supervisor: null,    
    profession: null,
    urlTest: null
  }
  this.completeTest={
    supervisor : null,    
    profession : null,
    urlCompleteTest : null,
    userId : null,
    score : null,
    remarks : null,
    StartTime : null,
    endTime : null,
  }
 }

  UploadNewTest(){
    this.httpClient.post(this.baseurl+ 'api/tests/newTest', this.test, this.postToken()).subscribe(
      data=>{
        console.log("data : ", data);      
      },
      err=>console.log("err: " , err)
      
    )
  }
  getTest(supervizor){
    console.log('servis all test');
    return this.httpClient.get<testModel[]>(this.baseurl + 'api/tests/getTest/' + supervizor, this.postToken())
  }
  UploadCompleteTest(){
    this.httpClient.post(this.baseurl+ 'api/tests/CompleteTest', this.completeTest, this.postToken()).subscribe(
      data=>{
        console.log("data : ", data);      
      },
      err=>console.log("err: " , err)
      
    )
  }
  UpdatedCompleteTest(_id:string, score:number,remarks:string): Observable<any>{
return this.httpClient.put(this.baseurl + 'api/tests/UpdatedCompleteTest',{_id, score, remarks}, this.postToken())
  }
  testScore(idNumber:number,supervizor:string,profession:String):Observable<any>{
    return this.httpClient.put(this.baseurl + 'api/tests/testScore',{ supervizor, profession, idNumber}, this.postToken())
  }
  
  postToken() {
    let myToken = localStorage.getItem("token")
    console.log("token: " + myToken);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': JSON.parse(myToken)
       
        
      })
    };
    console.log(httpOptions);
    
    return httpOptions
  }

}


