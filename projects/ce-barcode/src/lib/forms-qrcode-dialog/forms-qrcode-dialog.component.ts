import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IndexType } from '@codeffekt/ce-core-data';

export interface FormsQrcodeDialogConfig {
  formIds: IndexType[];
}

@Component({
    selector: 'lib-forms-qrcode-dialog',
    templateUrl: './forms-qrcode-dialog.component.html',
    styleUrls: ['./forms-qrcode-dialog.component.css'],
    standalone: false
})
export class FormsQrcodeDialogComponent implements OnInit {

  static open(dialog: MatDialog, config: FormsQrcodeDialogConfig) {
    return dialog.open(FormsQrcodeDialogComponent, { data: config });
  }

  barcodeValue?: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private config: FormsQrcodeDialogConfig,
    public dialogRef: MatDialogRef<FormsQrcodeDialogComponent>,
  ) { 
    this.barcodeValue = config.formIds?.length ? this.config.formIds.join(' ') : undefined;
  }

  ngOnInit(): void {
  }  
}
