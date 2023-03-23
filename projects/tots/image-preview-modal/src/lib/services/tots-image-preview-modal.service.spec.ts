import { TestBed } from '@angular/core/testing';

import { TotsImagePreviewModalService } from './tots-image-preview-modal.service';

describe('TotsImagePreviewModalServiceService', () => {
  let service: TotsImagePreviewModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotsImagePreviewModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
