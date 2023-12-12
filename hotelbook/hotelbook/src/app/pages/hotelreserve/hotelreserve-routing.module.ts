import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelreservePage } from './hotelreserve.page';

const routes: Routes = [
  {
    path: '',
    component: HotelreservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelreservePageRoutingModule {}
