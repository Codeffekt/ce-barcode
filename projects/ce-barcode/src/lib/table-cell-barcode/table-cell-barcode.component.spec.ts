import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCellBarcodeComponent } from './table-cell-barcode.component';

describe('TableCellBarcodeComponent', () => {
  let component: TableCellBarcodeComponent;
  let fixture: ComponentFixture<TableCellBarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCellBarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCellBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
