import { Directive, EventEmitter, HostListener, Output } from '@angular/core'

@Directive({
    selector: '[appDropZone]'
})
export class DropZoneDirective {

    @Output() dropped = new EventEmitter<FileList>()
    @Output() hovered = new EventEmitter<boolean>()

    constructor() { }

    @HostListener('drop', ['$event'])
    onDrop = (event: DragEvent): void => {
        event.preventDefault()
            
        this.dropped.emit(event.dataTransfer.files)
        this.hovered.emit(false)
    }
    
    @HostListener('dragover', ['$event'])
    onDragOver(event: Event) {
        event.preventDefault()

        this.hovered.emit(true)
    }
    
    @HostListener('dragleave', ['$event'])
    onDragLeave(event: Event) {
        event.preventDefault()

        this.hovered.emit(false)
    }
}
