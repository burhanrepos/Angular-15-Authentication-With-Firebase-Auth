import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn=false
  constructor(private firebaseService:FirebaseService){}

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    {
      this.isSignedIn=true
    }
    else
      this.isSignedIn=false
  }
  async AppComponent_OnSignIn(email:string,password:string)
  {
    await this.firebaseService.FirebaseService_Signin(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }
  async AppComponent_OnSignUp(email:string,password:string)
  {
    await this.firebaseService.FirebaseService_SignUp(email,password)
    if(this.firebaseService.isLoggedIn)
      this.isSignedIn=true
  }
  AppComponent_HandleLogout()
  {
    console.log("Signed out");
    
    this.isSignedIn=false;
  }
}
