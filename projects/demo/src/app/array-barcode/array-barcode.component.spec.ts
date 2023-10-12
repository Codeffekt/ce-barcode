import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBarcodeComponent } from './array-barcode.component';

describe('ArrayBarcodeComponent', () => {
  let component: ArrayBarcodeComponent;
  let fixture: ComponentFixture<ArrayBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
