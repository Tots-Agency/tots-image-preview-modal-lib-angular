import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TotsImagePreviewModalComponent } from '../modals/image-preview-modal/image-preview-modal.component';
import { TotsImage } from '../entities/tots-image';

@Injectable({
  providedIn: 'root'
})
export class TotsImagePreviewModalService {

  constructor(
    protected dialog: MatDialog
  ) { }

  open(images: Array<TotsImage>) {
    this.dialog.open(TotsImagePreviewModalComponent, {
      data: images
    });
  }
}
