import { Injectable } from '@angular/core'
import { AuthService } from '@app/services/auth/auth.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { NotificationService } from '@app/services'
import { Router } from '@angular/router'
import * as userActions from './user.actions'

@Injectable()
export class UserEffects {
    signUpEmail$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signUpEmail),
        mergeMap((formData) => this.authService.signUpEmail(formData).pipe(
                map((user) => {
                    this.router.navigate(['/auth/email-confirm'])
                    return userActions.signUpEmailSuccess({ user })
                }),
                catchError((error) => {
                    this.notification.error(error.message)
                    return of(userActions.signUpEmailFailure({ error: error.message }))
                })
            )
        )
    ))
    
    signInEmail$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signInEmail),
        mergeMap((formData) => this.authService.signInEmail(formData).pipe(
                map((token) => {
                    localStorage.setItem('token', JSON.stringify(token))
                    return userActions.signInEmailSuccess(token)
                }),
                catchError((error) => {
                    this.notification.error(error.message)
                    return of(userActions.signInEmailFailure({ error: error.message }))
                })
            )
        )
    ))
    
    signOut$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signOut),
        mergeMap(() => this.authService.signOut().pipe(
                map(() => userActions.signOutSuccess(null)),
                catchError((error) => {
                    this.notification.error(error.message)
                    return of(userActions.signOutFailure({ error: error.message }))
                })
            )
        )
    ))

    constructor(private actions$: Actions, private authService: AuthService, 
        private router: Router, private notification: NotificationService) { }
}
