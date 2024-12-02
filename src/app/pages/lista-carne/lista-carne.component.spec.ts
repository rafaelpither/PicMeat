import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarneComponent } from './lista-carne.component';

describe('ListaCarneComponent', () => {
  let component: ListaCarneComponent;
  let fixture: ComponentFixture<ListaCarneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaCarneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCarneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
