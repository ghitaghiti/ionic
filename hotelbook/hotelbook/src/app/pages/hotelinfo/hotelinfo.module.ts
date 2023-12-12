import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelinfoPageRoutingModule } from './hotelinfo-routing.module';

import { HotelinfoPage } from './hotelinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelinfoPageRoutingModule
  ],
  declarations: [HotelinfoPage]
})
export class HotelinfoPageModule {}
