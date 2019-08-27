import { TestBed } from '@angular/core/testing';

import { TrackUserEventsService } from './track-user-events.service';

describe('TrackUserEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackUserEventsService = TestBed.get(TrackUserEventsService);
    expect(service).toBeTruthy();
  });
});
