import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBlockComponent } from '@codeffekt/ce-core';
import { BarCode } from '@codeffekt/ce-core-data';
import { BarcodeFormat } from '@zxing/library';
import { BarcodeScannerComponent } from '../barcode-scanner/barcode-scanner.component';
@Component({
    selector: 'ce-form-barcode-block',
    templateUrl: './form-barcode-block.component.html',
    styleUrls: ['./form-barcode-block.component.scss'],
    standalone: false
})
export class FormBarcodeBlockComponent extends FormBlockComponent<BarCode> implements OnInit {

  supportedTypes: BarcodeFormat[] = [
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];


  constructor(private dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
  }

  showBarcode() {
    this.dialog.open(FormBarcodeDialogComponent, {
      data: {
        barcode: this.value
      }
    });
  }

  barcodeInputChanged(text: any) {
    this.update({ text, type: this.value?.type || "CODE_128" });
  }

  barcodeTypeChanged(type: string) {
    this.update({ text: this.value.text, type });
  }

  scanBarcode() {

    const dialogRef = BarcodeScannerComponent.openDialog(this.dialog);

    dialogRef.afterClosed().subscribe((barcode: Pick<BarCode, "text" | "type">) => {
      if (barcode) {
        this.update(barcode);
      }
    });
  }

  private update(value: Pick<BarCode, "text" | "type">) {

    const newValue = { ...this.value, ...value };
    const now = new Date().getTime();
    if (!newValue.ctime) {
      newValue.ctime = now;
    }
    newValue.mtime = now;
    console
    this.value = newValue;
  }
}

export interface FormbarcodeDialogData {
  barcode: BarCode;
  type?: string;
}

@Component({
    selector: 'ce-form-barcode-dialog',
    template: `<ce-barcode [text]="data.barcode.text" [type]="data.barcode.type"></ce-barcode>`,
    standalone: false
})
export class FormBarcodeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<FormBarcodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormbarcodeDialogData) { }
}