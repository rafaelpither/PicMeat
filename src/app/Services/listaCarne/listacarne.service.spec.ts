import { TestBed } from '@angular/core/testing';

import { ListacarneService } from './listacarne.service';

describe('ListacarneService', () => {
  let service: ListacarneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListacarneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
