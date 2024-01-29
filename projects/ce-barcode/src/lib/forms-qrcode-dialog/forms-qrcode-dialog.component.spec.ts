import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsQrcodeDialogComponent } from './forms-qrcode-dialog.component';

describe('FormsQrcodeDialogComponent', () => {
  let component: FormsQrcodeDialogComponent;
  let fixture: ComponentFixture<FormsQrcodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsQrcodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsQrcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
