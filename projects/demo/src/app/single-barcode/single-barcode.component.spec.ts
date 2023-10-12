import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBarcodeComponent } from './single-barcode.component';

describe('SingleBarcodeComponent', () => {
  let component: SingleBarcodeComponent;
  let fixture: ComponentFixture<SingleBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
