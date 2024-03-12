import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BarcodeScannerComponent, FormsQrcodeDialogComponent } from '@codeffekt/ce-barcode';
import { BarCode } from '@codeffekt/ce-core-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public dialog: MatDialog,
  ) { }

  openFormQrcodeDialog() {
    FormsQrcodeDialogComponent.open(this.dialog,
      {
        formIds: [
          "6fd80067-4915-40f1-812a-a3d1e45ee6e3",
          "57cdb4e1-02a0-43bc-a51b-5f451e78668a",
          "0eaefde0-6ebe-4a2a-bb0f-6d493dae9431", 
          "ff7f7b37-95ec-4b9d-befc-2b4ef62cf411"
        ]
      });
  }

  openBarcodeScanner() {
    const dialogRef = BarcodeScannerComponent.openDialog(this.dialog);

    dialogRef.afterClosed().subscribe((barcode: Pick<BarCode, "text" | "type">) => {
      if (barcode) {
        console.log(barcode);
      }
    });
  }
}
