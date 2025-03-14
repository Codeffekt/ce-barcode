import { Component, OnInit } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';

@Component({
    selector: 'lib-table-cell-barcode',
    templateUrl: './table-cell-barcode.component.html',
    styleUrls: ['./table-cell-barcode.component.css'],
    standalone: false
})
export class TableCellBarcodeComponent implements OnInit {

  block!: FormBlock;

  constructor() { }

  ngOnInit(): void {
  }

}
