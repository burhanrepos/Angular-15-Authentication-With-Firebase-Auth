import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import { HomeComponent } from './home/home.component'
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDf9rBymHRSu6SIj7N2Y8o3UAUFO_rCKdc",
      authDomain: "fir-angular-auth-dfd4f.firebaseapp.com",
      projectId: "fir-angular-auth-dfd4f",
      storageBucket: "fir-angular-auth-dfd4f.appspot.com",
      messagingSenderId: "817325364766",
      appId: "1:817325364766:web:a4e30ff68f2208a713000f"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
