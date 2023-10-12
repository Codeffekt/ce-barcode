import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormBlock } from '@codeffekt/ce-core-data';

@Component({
  selector: 'app-single-barcode',
  templateUrl: './single-barcode.component.html',
  styleUrls: ['./single-barcode.component.scss']
})
export class SingleBarcodeComponent implements OnInit {
  
  form!: FormGroup;

  formBlock: FormBlock = {
    field: 'barcode',
    /* value: { text: 'ABC-1234', type: 'CODE_39' }, */
    label: 'Code-barre',
    type: 'barcode',
    params: {
      displayInline: false,
      editType: false
    }
  }

  ctime = Date.now();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      'barcode': this.formBlock.value
    });
  }

  onFormChanges(form: any) {
    console.log(form);
  }
}
