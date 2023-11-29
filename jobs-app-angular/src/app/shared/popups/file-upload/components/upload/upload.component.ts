import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {
    
    @Input() file: File
    @Output() completed = new EventEmitter<string>()

    percentage$: Observable<number>
    downloadUrl: string

    private destroy = new Subject<void>()

    constructor() {}

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.destroy.next()
        this.destroy.complete()
    }

    startUpload(): void {
        const path = `${this.file.type.split('/')[0]}/${Date.now()}_${this.file.name}`
    }

}
