import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelcityPageRoutingModule } from './hotelcity-routing.module';

import { HotelcityPage } from './hotelcity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelcityPageRoutingModule
  ],
  declarations: [HotelcityPage]
})
export class HotelcityPageModule {}
