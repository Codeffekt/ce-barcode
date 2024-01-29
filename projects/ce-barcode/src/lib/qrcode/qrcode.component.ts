import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import QRCode from 'qrcode';

@Component({
  selector: 'ce-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvasElementRef!: ElementRef;

  @Input() text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.update();
  }

  private update() {

    if (this.text) {
      QRCode.toCanvas(this.canvasElementRef.nativeElement, this.text);
    }

  }
}
