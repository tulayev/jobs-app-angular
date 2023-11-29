import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { markFromGroupTouched, regex, regexErrors } from '@app/shared'
import { AppState } from '@app/store'
import { loadingSelector, signInEmail } from '@app/store/user'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    regexErrors = regexErrors
    form: FormGroup

    loading$: Observable<boolean>
    
    constructor(private fb: FormBuilder, private store: Store<AppState>) {
        this.loading$ = this.store.pipe(select(loadingSelector))
    }

    ngOnInit(): void {
        this.form = this.fb.group({
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
            }]
        })
    }

    onSubmit(): void {
        if (this.form.valid) {
            const value = this.form.value
            this.store.dispatch(signInEmail(value))
        } else {
            markFromGroupTouched(this.form)
        }
    }
}
