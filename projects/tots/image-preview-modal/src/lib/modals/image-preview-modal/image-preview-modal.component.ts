import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TotsImage } from '../../entities/tots-image';

@Component({
  selector: 'tots-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss']
})
export class TotsImagePreviewModalComponent implements OnInit {

  selectedIndex = 0;
  selectedImage?: TotsImage;

  constructor(
		protected dialogRef: MatDialogRef<TotsImagePreviewModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data : { items: Array<TotsImage>, selectedIndex?: number},
	) { }

  ngOnInit(): void {
    if(this.data.selectedIndex){
      this.selectedIndex = this.data.selectedIndex;
    }
    this.selectedImage = this.data.items[this.selectedIndex];
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
