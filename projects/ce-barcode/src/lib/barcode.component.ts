import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import JsBarcode from 'jsbarcode';

const BARCODE_TYPE_TO_JSBARCODE: { [key: string]: string } = {
  "CODE_39": "CODE39",
  "CODE_128": "CODE128",
  "EAN_8": "EAN8",
  "EAN_13": "EAN13",
};

function getJSBarcodeFromBarcodeType(type: string): string {
  return BARCODE_TYPE_TO_JSBARCODE[type] || "CODE128";
}

@Component({
  selector: 'ce-barcode',
  templateUrl: './barcode.component.html',
})
export class BarcodeComponent implements OnChanges, AfterViewInit {

  @ViewChild('svg') svgElementRef!: ElementRef;

  @Input() text: string | undefined;
  @Input() type: string | undefined;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  ngAfterViewInit() {
    this.update();
  }

  private update(): void {
    if (!this.text || !this.svgElementRef) {
      return;
    }

    const format = this.type ? getJSBarcodeFromBarcodeType(this.type) : 'CODE128';

    JsBarcode(this.svgElementRef.nativeElement, this.text, {
      format,
      fontSize: 12,
      height: 48
    } as any);
  }
}
