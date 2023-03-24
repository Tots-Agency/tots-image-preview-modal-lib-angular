import { MatDialogRef } from "@angular/material/dialog";
import { TotsImagePreviewModalComponent } from "../modals/image-preview-modal/image-preview-modal.component";

export class TotsActionImage {
    key: string = '';
    image: any;
    dialogRef?: MatDialogRef<TotsImagePreviewModalComponent>;
}