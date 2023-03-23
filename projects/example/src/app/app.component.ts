import { Component } from '@angular/core';
import { TotsImagePreviewModalService } from 'projects/tots/image-preview-modal/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    protected imagePreviewModal: TotsImagePreviewModalService
  ) {}

  onClickOpen() {
    this.imagePreviewModal.open([]);
  }
}
