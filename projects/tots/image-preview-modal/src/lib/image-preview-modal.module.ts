/** Angular */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

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
    MatIconModule
  ],
  exports: [
    /** Modals */
    TotsImagePreviewModalComponent
  ]
})
export class TotsImagePreviewModalModule { }
