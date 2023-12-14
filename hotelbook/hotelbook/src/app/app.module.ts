import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HotelreservePage } from './pages/hotelreserve/hotelreserve.page';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent, HotelreservePage],
  imports: [

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule, 
     ReactiveFormsModule, 
     FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
