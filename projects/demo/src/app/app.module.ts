import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeCoreModule } from '@codeffekt/ce-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayBarcodeModule } from './array-barcode/array-barcode.module';
import { SingleBarcodeModule } from './single-barcode/single-barcode.module';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CeCoreModule,    
    ArrayBarcodeModule,
    SingleBarcodeModule,
    CeBarcodeModule,    
    AppRoutingModule,    
    MatDialogModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
