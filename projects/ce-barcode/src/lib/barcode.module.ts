import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BarcodeScannerComponent, BarcodeScannerDialogConfirmation } from './barcode-scanner/barcode-scanner.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { FormBarcodeBlockComponent, FormBarcodeDialogComponent } from './form-barcode-block/form-barcode-block.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BarcodeFormatLabel } from './barcode-formats';
import { FormBlockStoreService, TableCellStoreService } from '@codeffekt/ce-core';
import { TableCellBarcodeComponent } from './table-cell-barcode/table-cell-barcode.component';
import { FormsQrcodeDialogComponent } from './forms-qrcode-dialog/forms-qrcode-dialog.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  declarations: [
    BarcodeComponent,
    BarcodeScannerComponent,
    BarcodeScannerDialogConfirmation,
    FormBarcodeBlockComponent,
    FormBarcodeDialogComponent,
    BarcodeFormatLabel,
    TableCellBarcodeComponent,
    FormsQrcodeDialogComponent,
    QrcodeComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ZXingScannerModule,
    MatMenuModule,
    MatSelectModule
  ],
  exports: [
    BarcodeComponent,
    BarcodeScannerComponent,
    BarcodeScannerDialogConfirmation,
    FormBarcodeBlockComponent,
    FormBarcodeDialogComponent,
    TableCellBarcodeComponent,
    FormsQrcodeDialogComponent,
    QrcodeComponent,
  ]
})
export class CeBarcodeModule {
  constructor(
    readonly store: FormBlockStoreService,
    readonly tableCellStore: TableCellStoreService
  ) {
    store.setComponents({
      'barcode': FormBarcodeBlockComponent,
    });
    tableCellStore.setComponents({
      'barcode': TableCellBarcodeComponent
    });
  }
}
