import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProdComponent } from './edicao-prod.component';

describe('EdicaoProdComponent', () => {
  let component: EdicaoProdComponent;
  let fixture: ComponentFixture<EdicaoProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicaoProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
