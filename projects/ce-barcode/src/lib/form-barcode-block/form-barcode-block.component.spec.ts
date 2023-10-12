import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBarcodeBlockComponent } from './form-barcode-block.component';

describe('FormBarcodeBlockComponent', () => {
  let component: FormBarcodeBlockComponent;
  let fixture: ComponentFixture<FormBarcodeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBarcodeBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBarcodeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
