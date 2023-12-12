import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'hotelcity',
    loadChildren: () => import('./pages/hotelcity/hotelcity.module').then( m => m.HotelcityPageModule)
  },
  {
    path: 'hotelinfo',
    loadChildren: () => import('./pages/hotelinfo/hotelinfo.module').then( m => m.HotelinfoPageModule)
  },
  {
    path: 'hotelreserve',
    loadChildren: () => import('./pages/hotelreserve/hotelreserve.module').then( m => m.HotelreservePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
