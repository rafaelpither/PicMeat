import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlogComponent } from './onlog.component';

describe('OnlogComponent', () => {
  let component: OnlogComponent;
  let fixture: ComponentFixture<OnlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
