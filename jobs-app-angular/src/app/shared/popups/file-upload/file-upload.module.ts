import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FileUploadDirective } from './file-upload.directive'
import { FileUploadComponent } from './file-upload.component'

import { MatDialogModule } from '@angular/material/dialog'
import { ImageCropperModule } from 'ngx-image-cropper'
import { DropZoneDirective } from './directives/drop-zone/drop-zone.directive'
import { UploadComponent } from './components/upload/upload.component'



@NgModule({
    declarations: [
        FileUploadDirective,
        FileUploadComponent,
        DropZoneDirective,
        UploadComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        ImageCropperModule
    ], 
    exports: [
        FileUploadDirective
    ]
})
export class FileUploadModule { }
