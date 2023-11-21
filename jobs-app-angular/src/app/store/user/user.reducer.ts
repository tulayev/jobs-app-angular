import { createReducer, on } from '@ngrx/store'
import { User } from '@app/models/backend'
import * as userActions from './user.actions'

export interface UserState {
    loading: boolean
    user: User
    token: string | null
    isSignedIn: boolean
    error: string | null
}

export const initialState: UserState = {
    loading: false,
    user: null,
    token: null,
    isSignedIn: localStorage.getItem('token') ? true : null,
    error: null,
}

export const UserReducer = createReducer(
    initialState,
    
    on(userActions.signUpEmail, (state) => ({ 
        ...state, 
        loading: true 
    })),
    on(userActions.signUpEmailSuccess, (state, action) => ({
        ...state,
        loading: false,
        user: action.user,
    })),
    on(userActions.signUpEmailFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
    })),
    
    on(userActions.signInEmail, (state) => ({ 
        ...state, 
        loading: true 
    })),
    on(userActions.signInEmailSuccess, (state, action) => ({
        ...state,
        loading: false,
        token: action.token,
        isSignedIn: true
    })),
    on(userActions.signInEmailFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
    })),

    on(userActions.authUser, (state) => ({ 
        ...state, 
        loading: true 
    })),
    on(userActions.authUserSuccess, (state, action) => ({
        ...state,
        loading: false,
        user: action.user,
    })),
    on(userActions.authUserFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
    })),
    
    on(userActions.signOut, (state) => ({ 
        ...state, 
        loading: true 
    })),
    on(userActions.signOutSuccess, (state, _) => ({
        ...state,
        loading: false,
        user: null,
        token: null,
        isSignedIn: false
    })),
    on(userActions.signOutFailure, (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
    }))
)
