import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelinfoPage } from './hotelinfo.page';

const routes: Routes = [
  {
    path: '',
    component: HotelinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelinfoPageRoutingModule {}
