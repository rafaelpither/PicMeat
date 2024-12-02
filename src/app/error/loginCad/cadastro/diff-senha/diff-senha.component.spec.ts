import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffSenhaComponent } from './diff-senha.component';

describe('DiffSenhaComponent', () => {
  let component: DiffSenhaComponent;
  let fixture: ComponentFixture<DiffSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiffSenhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
