import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

type PasswordType = 'password' | 'text'

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordComponent),
            multi: true
        }
    ]
})
export class PasswordComponent implements ControlValueAccessor {
    @Input() placeholder: string
    @Output() changed = new EventEmitter<string>()
    
    value: string
    isDisabled: boolean
    passwordType: PasswordType

    constructor() {
        this.passwordType = 'password'
    }

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

    togglePassword(): void {
        this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
    }
}
