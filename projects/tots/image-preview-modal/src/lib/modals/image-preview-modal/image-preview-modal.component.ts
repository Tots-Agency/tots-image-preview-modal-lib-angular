import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { TotsActionImage } from '../../entities/tots-action-image';
import { TotsButtonImage } from '../../entities/tots-button-image';
import { TotsImage } from '../../entities/tots-image';

@Component({
  selector: 'tots-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss']
})
export class TotsImagePreviewModalComponent implements OnInit {

  selectedIndex = 0;
  selectedImage?: TotsImage;

  onActions = new Subject<TotsActionImage>();

  constructor(
		protected dialogRef: MatDialogRef<TotsImagePreviewModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data : { items: Array<TotsImage>, selectedIndex?: number, buttons?: Array<TotsButtonImage>},
	) { }

  ngOnInit(): void {
    if(this.data.selectedIndex){
      this.selectedIndex = this.data.selectedIndex;
    }
    this.selectedImage = this.data.items[this.selectedIndex];
  }

  onClick(button: TotsButtonImage) {
    this.onActions.next({ key: button.key, image: this.selectedImage, dialogRef: this.dialogRef });
  }
  protected emitClose($event:MouseEvent) {
    this.dialogRef.close();
    this.onActions.next({ key: "close", image: this.selectedImage, dialogRef: this.dialogRef });
  }

  onClickNext() {
    if(this.selectedIndex >= this.data.items.length-1){
      return;
    }

    this.selectedIndex++;
    this.selectedImage = this.data.items[this.selectedIndex];
  }

  onClickPrev() {
    if(this.selectedIndex <= 0){
      return;
    }

    this.selectedIndex--;
    this.selectedImage = this.data.items[this.selectedIndex];
  }
}
