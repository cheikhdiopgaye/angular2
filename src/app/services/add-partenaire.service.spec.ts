import { TestBed } from '@angular/core/testing';

import { AddPartenaireService } from './add-partenaire.service';

describe('AddPartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPartenaireService = TestBed.get(AddPartenaireService);
    expect(service).toBeTruthy();
  });
});
