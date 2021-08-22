import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterImgComponent } from './components/enter-img/enter-img.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { REGISTERComponent } from './components/register/register.component';
import { TokenBaceComponent } from './components/token-bace/token-bace.component';
import { GatAllUsersComponent } from './components/gat-all-users/gat-all-users.component';
import { GatUserComponent } from './components/gat-user/gat-user.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { PasswordComponent } from './components/password/password.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { UploadTestComponent } from './components/upload-test/upload-test.component';
import { NewuserComponent } from './components/newuser/newuser.component';
import { FrontPageSupervizorComponent } from './components/front-page-supervizor/front-page-supervizor.component';

const routes: Routes = [
   {path:'', component : HomeComponent},
   {path:'log-in',component :LogInComponent },
   {path:'register',component :REGISTERComponent},
   {path:'token-bace',component :TokenBaceComponent},
   {path:'enter-img',component :EnterImgComponent},
   {path:'app-list-user',component :ListUserComponent},
   {path:'app-gat-all-users',component :GatAllUsersComponent},
   {path:'app-gat-user',component :GatUserComponent},
   {path:'questionnaire',component :QuestionnaireComponent},
   {path:'app-password',component :PasswordComponent},
   {path:'front-page',component :FrontPageComponent},
   {path:'questionnaire2',component :Questionnaire2Component},
   {path:'app-upload-test',component :UploadTestComponent},
   {path:'app-newuser',component :NewuserComponent},
   {path:'front-page-supervizor',component :FrontPageSupervizorComponent},
   //{path:'log-out',component :LogOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
