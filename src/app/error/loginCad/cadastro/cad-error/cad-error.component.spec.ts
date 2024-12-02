import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadErrorComponent } from './cad-error.component';

describe('CadErrorComponent', () => {
  let component: CadErrorComponent;
  let fixture: ComponentFixture<CadErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
