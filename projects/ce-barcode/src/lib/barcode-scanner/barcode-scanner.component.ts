import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BarcodeFormat, Result } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { getBarcodeTypeFromZxingFormat } from '../barcode-formats';

export interface BarcodeScannerDialogOptions {
  useConfirmationDialog: boolean;
}

@Component({
  selector: 'ce-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarcodeScannerComponent implements OnInit {

  public devices: MediaDeviceInfo[] = [];
  public deviceCurrent?: MediaDeviceInfo;
  public shouldDecode = true;

  @ViewChild(ZXingScannerComponent) zxing!: ZXingScannerComponent;

  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_39,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<BarcodeScannerComponent>
  ) { }

  static openDialog(dialog: MatDialog, options: BarcodeScannerDialogOptions = {
     useConfirmationDialog: true
  }): MatDialogRef<BarcodeScannerComponent> {
    return dialog.open(BarcodeScannerComponent, {
      height: '100%',
      width: '100%',
      maxWidth: '100%',
      panelClass: 'barcode-scanner-dialog',
      data: options
    });
  }

  ngOnInit() { }

  onCamerasFound(devices: MediaDeviceInfo[]) {
    this.devices = devices;
  }

  onDeviceChange(device: MediaDeviceInfo) {
    if (device?.deviceId === this.deviceCurrent?.deviceId) {
      return;
    }
    this.deviceCurrent = device;
  }

  dismiss(result?: any) {
    this.dialogRef.close(result);
  }

  onScanComplete(result: Result | undefined) {

    if (!result) {
      return;
    }

    if (!this.shouldDecode) {
      return;
    }

    const config: BarcodeScannerConfirmationConfig = {
      result
    };

    const confirmDiagRef = this.dialog.open(BarcodeScannerDialogConfirmation, { data: config });
    confirmDiagRef.afterClosed().subscribe(exit => {
      if (exit) {
        this.dismiss({ text: result.getText(), type: getBarcodeTypeFromZxingFormat(result.getBarcodeFormat()) });
        return;
      } else {
        this.shouldDecode = true;
      }
    });

    this.shouldDecode = false;
  }
}

interface BarcodeScannerConfirmationConfig {
  result: Result;
}

@Component({
  selector: 'barcode-scanner-result',
  template: `
  <p>Code-barres détecté: {{text}}</p>
  <div mat-dialog-actions fxLayout="row wrap" fxLayoutGap="12px" fxLayoutAlign="end center">
    <button mat-button color="warn" [mat-dialog-close]="false">Nouveau scan</button>
    <button mat-flat-button  [mat-dialog-close]="true" cdkFocusInitial>Valider</button>
  </div>
  `,
  styleUrls: []
})
export class BarcodeScannerDialogConfirmation {

  text!: string;

  constructor(
    dialogRef: MatDialogRef<BarcodeScannerDialogConfirmation>,
    @Inject(MAT_DIALOG_DATA) config: BarcodeScannerConfirmationConfig
  ) {
    this.text = config.result.getText();
    dialogRef.disableClose = true;
  }
}
