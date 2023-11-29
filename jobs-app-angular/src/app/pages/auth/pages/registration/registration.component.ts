import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { markFromGroupTouched, regex, regexErrors } from '@app/shared'
import { AppState } from '@app/store'
import { loadingSelector, signUpEmail } from '@app/store/user'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {
    regexErrors = regexErrors
    form: FormGroup

    loading$: Observable<boolean>
    
    constructor(private fb: FormBuilder, private store: Store<AppState>) {
        this.loading$ = this.store.pipe(select(loadingSelector))
    }
    
    private confirmPasswordValidator(formGroup: FormGroup): { [key: string]: boolean } {
        const password = formGroup.get('password')
        const passwordConfirm = formGroup.get('password_confirm')

        return passwordConfirm.value && password.value !== passwordConfirm.value 
            ? { confirm: true } 
            : null
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            name: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(32)
                ]
            }],
            photoUrl: [null, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            country: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(32)
                ]
            }],
            role_id: [1, {
                updateOn: 'blur', validators: [
                    Validators.required
                ]
            }],
            email: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.maxLength(128),
                    Validators.pattern(regex.email)
                ]
            }],
            password: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(30),
                    Validators.pattern(regex.password)
                ]
            }],
            password_confirm: [null, {
                updateOn: 'blur', validators: [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(30),
                    Validators.pattern(regex.password)
                ]
            }],
        }, { validator: this.confirmPasswordValidator })
    }

    onSubmit(): void {
        if (this.form.valid) {
            const value = this.form.value
            this.store.dispatch(signUpEmail(value))
        } else {
            markFromGroupTouched(this.form)
        }
    }
}
