import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProdComponent } from './compra-prod.component';

describe('CompraProdComponent', () => {
  let component: CompraProdComponent;
  let fixture: ComponentFixture<CompraProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
