import { TestBed } from '@angular/core/testing';

import { UserServisService } from './user-servis.service';

describe('UserServisService', () => {
  let service: UserServisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
