import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeBarcodeModule } from '@codeffekt/ce-barcode';
import { CeCoreModule, CeFormBlocksModule, CePipesModule, CeTableModule } from '@codeffekt/ce-core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleBarcodeComponent } from './single-barcode/single-barcode.component';
import { ArrayBarcodeComponent } from './array-barcode/array-barcode.component';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

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
    CeTableModule,
    CeBarcodeModule,
    CePipesModule,
    CeFormBlocksModule,
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
