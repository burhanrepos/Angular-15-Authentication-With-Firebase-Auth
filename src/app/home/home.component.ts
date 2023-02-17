import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() isLogout= new EventEmitter<void>()
  constructor(private firebaseService:FirebaseService){}
  HomeComponent_OnSignOut()
  {
    this.firebaseService.FirebaseService_SignOut()
    this.isLogout.emit()

  }
}
