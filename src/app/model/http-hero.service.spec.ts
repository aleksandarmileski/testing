import { TestBed, inject } from '@angular/core/testing';
import { HttpHeroService } from './http-hero.service';

describe('HttpHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHeroService]
    });
  });

  it('should ...', inject([HttpHeroService], (service: HttpHeroService) => {
    expect(service).toBeTruthy();
  }));
});
