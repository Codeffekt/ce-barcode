import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { BarcodeScannerComponent, BarcodeScannerDialogConfirmation } from './barcode-scanner/barcode-scanner.component';
import { BarcodeComponent } from './barcode/barcode.component';
import { FormBarcodeBlockComponent, FormBarcodeDialogComponent } from './form-barcode-block/form-barcode-block.component';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { FormsModule } from '@angular/forms';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { BarcodeFormatLabel } from './barcode-formats';
import { FormBlockStoreService, TableCellStoreService } from '@codeffekt/ce-core';
import { TableCellBarcodeComponent } from './table-cell-barcode/table-cell-barcode.component';
import { FormsQrcodeDialogComponent } from './forms-qrcode-dialog/forms-qrcode-dialog.component';

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
