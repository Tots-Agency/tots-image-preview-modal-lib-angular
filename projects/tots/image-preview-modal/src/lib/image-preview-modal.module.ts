/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';

/** Modals */
import { TotsImagePreviewModalComponent } from './modals/image-preview-modal/image-preview-modal.component';



@NgModule({
  declarations: [
    
    /** Modals */
    TotsImagePreviewModalComponent
  ],
  imports: [
    /** Angular */
    CommonModule,

    /** Angular Material */
    MatDialogModule,
  ],
  exports: [
    /** Modals */
    TotsImagePreviewModalComponent
  ]
})
export class TotsImagePreviewModalModule { }
