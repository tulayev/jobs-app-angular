import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { FileUploadComponent } from './file-upload.component'

@Directive({
    selector: '[appFileUpload]'
})
export class FileUploadDirective {

    @Input() multiple: boolean
    @Input() crop: boolean
    
    @Output() changed = new EventEmitter<string | string[]>()

    constructor(private dialog: MatDialog) { }

    @HostListener('click', ['$event'])
    onClick() {
        this.openDialog()
    }

    private openDialog(): void {
        const dialogRef = this.dialog.open(FileUploadComponent, {
            width: '550px',
            height: '500px',
            data: {
                multiple: this.multiple,
                crop: this.crop
            }
        })

        dialogRef.afterClosed().subscribe(result => {
            this.changed.emit(result || null)
        })
    }
}
