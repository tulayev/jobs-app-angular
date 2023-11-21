import { User } from '@app/models/backend'
import { createAction, props } from '@ngrx/store'

export const signUpEmail = createAction(
    '[User] SignUp Email',
    props<{ formData: any }>()
)

export const signUpEmailSuccess = createAction(
    '[User] SignUp Email success',
    props<{ user: User }>()
)

export const signUpEmailFailure = createAction(
    '[User] SignUp Email failure',
    props<{ error: string }>()
)

export const signInEmail = createAction(
    '[User] SignIn Email',
    props<{ formData: any }>()
)

export const signInEmailSuccess = createAction(
    '[User] SignIn Email success',
    props<{ token: string }>()
)

export const signInEmailFailure = createAction(
    '[User] SignIn Email failure',
    props<{ error: string }>()
)

export const authUser = createAction(
    '[User] Get Auth User'
)

export const authUserSuccess = createAction(
    '[User] Get Auth User success',
    props<{ user: User }>()
)

export const authUserFailure = createAction(
    '[User] Get Auth User failure',
    props<{ error: string }>()
)

export const signOut = createAction(
    '[User] SignOut'
)

export const signOutSuccess = createAction(
    '[User] SignOut success'
)

export const signOutFailure = createAction(
    '[User] SignOut failure',
    props<{ error: string }>()
)
