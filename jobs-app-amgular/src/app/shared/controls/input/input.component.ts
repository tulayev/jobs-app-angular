import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor {
    @Input() placeholder: string
    @Output() changed = new EventEmitter<string>()

    value: string
    isDisabled: boolean

    constructor() {}

    private propagateChange: any = () => { }
    private propagateTouched: any = () => { }
    
    writeValue(value: string): void {
        this.value = value
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn
    }
    
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled
    }

    onKeyup(event: Event): void {
        const value = (event.target as HTMLInputElement).value

        this.value = value
        this.propagateChange(value)
        this.changed.emit(value)
    }

    onBlur(): void {
        this.propagateTouched()
    }
}
