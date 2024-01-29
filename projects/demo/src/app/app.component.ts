import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormsQrcodeDialogComponent } from '@codeffekt/ce-barcode';

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
        formIds: ["0eaefde0-6ebe-4a2a-bb0f-6d493dae9431", "ff7f7b37-95ec-4b9d-befc-2b4ef62cf411"]
      });
  }
}
