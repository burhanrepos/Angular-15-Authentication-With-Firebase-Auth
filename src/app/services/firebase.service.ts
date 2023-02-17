import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn=false;
  constructor(private firebaseAuth:AngularFireAuth) { }

  async FirebaseService_Signin(email:string, password: string)
  {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }

  async FirebaseService_SignUp(email:string, password: string)
  {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn=true;
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  FirebaseService_SignOut()
  {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user');
  }
}
