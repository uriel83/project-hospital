import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { REGISTERComponent } from './components/register/register.component';
import { TokenBaceComponent } from './components/token-bace/token-bace.component';
import { EnterImgComponent } from './components/enter-img/enter-img.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { GatAllUsersComponent } from './components/gat-all-users/gat-all-users.component';
import { GatUserComponent } from './components/gat-user/gat-user.component';
import { HeaderComponent } from './components/header/header.component';
import { PrintUserComponent } from './components/print-user/print-user.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { PasswordComponent } from './components/password/password.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from "../environments/environment";
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { UploadTestComponent } from './components/upload-test/upload-test.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { UploadedFileComponent } from './components/uploaded-file/uploaded-file.component';
import { FrontPageSupervizorComponent } from './components/front-page-supervizor/front-page-supervizor.component';
// import { } from 'bootstrap-select-country';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalInformationComponent,
    LogInComponent,    
    REGISTERComponent,   
    TokenBaceComponent,   
    EnterImgComponent,
    ListUserComponent,
    GatAllUsersComponent,
    GatUserComponent,
    HeaderComponent,
    PrintUserComponent,
    QuestionnaireComponent,
    PasswordComponent,
    FrontPageComponent,
    LogOutComponent,
    Questionnaire2Component,
    UploadTestComponent,
    NewuserComponent,
    UploadedFileComponent,
    FrontPageSupervizorComponent,  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireStorageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
