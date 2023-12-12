import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelreservePageRoutingModule } from './hotelreserve-routing.module';

import { HotelreservePage } from './hotelreserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelreservePageRoutingModule
  ],
  declarations: [HotelreservePage]
})
export class HotelreservePageModule {}
