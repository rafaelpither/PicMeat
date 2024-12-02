import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslogComponent } from './deslog.component';

describe('DeslogComponent', () => {
  let component: DeslogComponent;
  let fixture: ComponentFixture<DeslogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeslogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
