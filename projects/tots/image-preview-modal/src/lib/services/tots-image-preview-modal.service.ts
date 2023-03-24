import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TotsImagePreviewModalComponent } from '../modals/image-preview-modal/image-preview-modal.component';
import { TotsImage } from '../entities/tots-image';
import { TotsButtonImage } from '../entities/tots-button-image';
import { Observable } from 'rxjs';
import { TotsActionImage } from '../entities/tots-action-image';

@Injectable({
  providedIn: 'root'
})
export class TotsImagePreviewModalService {

  constructor(
    protected dialog: MatDialog
  ) { }

  open(images: Array<TotsImage>, selectedIndex?: number, buttons?: Array<TotsButtonImage>): Observable<TotsActionImage> {
    return this.dialog.open(TotsImagePreviewModalComponent, {
      data: { items: images, buttons: buttons, selectedIndex: selectedIndex },
    }).componentInstance.onActions;
  }
}
