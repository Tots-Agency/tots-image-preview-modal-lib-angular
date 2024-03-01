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
    this.imagePreviewModal.open([

      // Wide image
      { url: "/assets/img/wide-image.jpg" },

      // Standard 16:9 ratio
      { url: "/assets/img/16-by-9-image.png" },

      // Thin image
      { url: "/assets/img/tall-image.jpg" },

      { url: 'https://tots.agency/assets/img/blog/Coding-700x441.jpg' },
      { url: 'https://tots.agency/assets/img/blog/586e532d404f5a51dc969acf6313a487_XL-1024x607.jpg' },
      { url: 'https://tots.agency/assets/img/blog/Smart-Cities-700x441.jpg' },
      { url: 'https://tots.agency/assets/img/blog/Digitalizacion-1-400x253.jpg' },
      { url: 'https://tots.agency/assets/img/blog/an-inner-transformation-going-back-to-the-natural-living-system.jpg' },
    ], 0, [
      { key: 'delete', icon: 'delete', title: 'DELETE', classes: 'warning', color: 'warn' },
    ])
    .subscribe(res => {
      console.log(res);
    });
  }
}
