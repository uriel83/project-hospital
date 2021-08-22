import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServisService {
  user: UserModel;
  users: UserModel[];
  private baseurl = 'http://localhost:5000/';
  userLogIn: boolean = false;
  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem("token") != null) {
      this.user = JSON.parse(localStorage.getItem("user"))
      console.log("servis: " , this.user);
      this.userLogIn = true;
    } else {
        this.user = {
          name: null,
          idNumber: null,
          Idpassport: null,
          phonNumber: null,
          email: null,
          password: null,
          img: null,      
          role:'intern',
          roleNumber:100,
          mySupervizor : ''
        }
      console.log("user is null");

      }
    this.users = [];

  }
  add() {

    this.users.push(this.user);
    console.log("servis: welcome "+ this.user.role);
    this.httpClient.post(this.baseurl + 'login/create', this.user).subscribe(
      data => {
        console.log("create user!!!" , data);
        // for (let key in data) {
        //   localStorage.setItem(key, JSON.stringify(data[key]));
        // }
      },
      err => console.log(err)

    )


  }
  getAllUser(): Observable<any> {
    console.log('servis all users');

    return this.httpClient.get(this.baseurl + 'api/users/getAllUser', this.postToken())
  }

  getAllSupervizor(): Observable<any> {
    console.log('servis all Supervizor');

    return this.httpClient.get(this.baseurl + 'login/getAllSupervizor')
  }
  getAllUserBySupervizor(supervizor:string): Observable<any>{
    console.log('servis all Users By Supervizor');
    return this.httpClient.get(this.baseurl + 'api/users/getAllUserBySupervizor/'+supervizor)
  }
  getUserByName(name: string): Observable<any> {
    return this.httpClient.get(this.baseurl + 'api/users/byName/' + name, this.postToken())
  }
  getUserByIdNumber(idNumber: number): Observable<any> {
    return this.httpClient.get(this.baseurl + 'api/users/byId/' + idNumber, this.postToken())
  }
  updateMailUser(idNumber: number, age: number, city: string, country: string, graduation_year: number,
    academic_institution: string, medical_institution: string, residency: string, department: string): Observable<any> {


    return this.httpClient.put(this.baseurl + 'api/users/Id/' + idNumber,
      { idNumber, age, city, country, graduation_year, academic_institution, medical_institution, residency, department },
      this.postToken())
  }


  logInById(idNumber: number, password: string): Observable<any> {
    console.log("idNumber: ", idNumber);
    console.log("password: ", password);
    return this.httpClient.post(this.baseurl + "login/id", { idNumber, password }).pipe(
      tap(data => {
        console.log("servise token: ", data);
        for (let key in data) {
          localStorage.setItem(key, JSON.stringify(data[key]));
        }

      }),
       catchError(
        err => { console.log(err); return err })



      //  this.postToken()

    )
    
    // return of(localStorage.getItem("token"))
  }
  logInByEmail(email: string, password: string) {
    console.log("Email: ", email);
    console.log("password: ", password);

    this.httpClient.post(this.baseurl + "login/email", { email, password }).subscribe(
      data => {
        console.log("toktten: ", data);
        for (let key in data) {

          localStorage.setItem(key, JSON.stringify(data[key]));
        }
      },
      err => console.log(err)

    )
    this.userLogIn = true;
  }
  postToken() {
    let myToken = localStorage.getItem("token")
    console.log("test: " + myToken);

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
// this.httpClient.post(this.baseurl + "login/id", { idNumber, password }, this.postToken()).subscribe(