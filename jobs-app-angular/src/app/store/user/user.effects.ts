import { Injectable } from '@angular/core'
import { AuthService } from '@app/services/auth/auth.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of, tap } from 'rxjs'
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
                map((data) => {
                    this.router.navigate(['/'])
                    localStorage.setItem('token', JSON.stringify(data))
                    return userActions.signInEmailSuccess(data)
                }),
                catchError((error) => {
                    this.notification.error(error.message)
                    return of(userActions.signInEmailFailure({ error: error.message }))
                })
            )
        )
    ))
    
    authUser$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.authUser),
        mergeMap(() => this.authService.getAuthorizedUser().pipe(
                map((user) => {
                    return userActions.authUserSuccess({ user })
                }),
                catchError((error) => {
                    this.notification.error(error.message)
                    return of(userActions.authUserFailure({ error: error.message }))
                })
            )
        )
    ))
    
    signOut$ = createEffect(() => this.actions$.pipe(
        ofType(userActions.signOut),
        mergeMap(() => this.authService.signOut().pipe(
                map(() => {
                    const token = localStorage.getItem('token')
                    
                    if (token)
                        localStorage.removeItem('token')
                    
                    this.router.navigate(['/'])
                    return userActions.signOutSuccess()
                }),
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
