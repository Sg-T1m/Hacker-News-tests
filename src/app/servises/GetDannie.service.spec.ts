/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDannieService } from './GetDannie.service';

describe('Service: GetDannie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDannieService]
    });
  });

  it('should ...', inject([GetDannieService], (service: GetDannieService) => {
    expect(service).toBeTruthy();
  }));
});
