import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'payments', loadChildren: () => import('./modules/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'tenants', loadChildren: () => import('./modules/tenants/tenants.module').then(m => m.TenantsModule) },
  { path: 'properties', loadChildren: () => import('./modules/properties/properties.module').then(m => m.PropertiesModule) },
  { path: '',   loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
