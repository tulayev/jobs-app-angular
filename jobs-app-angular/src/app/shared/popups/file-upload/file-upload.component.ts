import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

export interface DialogData {
    multiple: boolean
    crop: boolean
}

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
    
    isHovering: boolean
    imageFile: File
    isError: boolean
    
    files: File[] = []
    fileUrls: string[] = []

    constructor(
        private dialogRef: MatDialogRef<FileUploadComponent>, 
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    ngOnInit(): void {
    }

    toggleHover(event: boolean): void {
        this.isHovering = event
    }

    onDrop(event: Event | FileList): void {
        const files = event instanceof Event 
            ? (event.target as HTMLInputElement).files
            : event   

        this.isError = false

        if (this.data.crop && files.length > 1) {
            this.isError = true
            return
        }

        for (let i = 0; i < files.length; i++) {
            this.files.push(files.item(i))
        }

        console.log(files)
    }
}
