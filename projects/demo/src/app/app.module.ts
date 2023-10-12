import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeCoreModule } from '@codeffekt/ce-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleBarcodeComponent } from './single-barcode/single-barcode.component';
import { ArrayBarcodeComponent } from './array-barcode/array-barcode.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SingleBarcodeComponent,
    ArrayBarcodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CeCoreModule,
    CeBarcodeModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
