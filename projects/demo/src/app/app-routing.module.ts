import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayBarcodeComponent } from './array-barcode/array-barcode.component';
import { SingleBarcodeComponent } from './single-barcode/single-barcode.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'single'
  },
  { 
    path: 'single',
    component: SingleBarcodeComponent
  },
  {
    path: 'array',
    component: ArrayBarcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
