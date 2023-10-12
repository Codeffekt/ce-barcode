import { Component, OnInit } from '@angular/core';
import { FormBlock } from '@codeffekt/ce-core-data';

@Component({
  selector: 'app-array-barcode',
  templateUrl: './array-barcode.component.html',
  styleUrls: ['./array-barcode.component.scss']
})
export class ArrayBarcodeComponent implements OnInit {

  displayedColumns = ['barcode'];

  dataSource: FormBlock[] = [
    {
      field: 'barcode',
      value: { text: 'ABC-1234', type: 'CODE_39' },
      label: 'Code-barre',
      type: 'barcode',
      params: {
        displayInline: false,
        editType: false
      }
    },
    {
      field: 'barcode',
      value: { text: '1234-VVVV', type: 'CODE_39' },
      label: 'Code-barre',
      type: 'barcode',
      params: {
        displayInline: false,
        editType: false
      }
    }
  ];

  ctime = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
