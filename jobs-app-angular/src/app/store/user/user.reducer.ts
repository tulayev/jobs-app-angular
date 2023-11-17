import { createReducer, on } from '@ngrx/store'
import { User } from '@app/models/backend'
import * as userActions from './user.actions'

export interface UserState {
    isLoading: boolean
    user: User
    token: string | null
    error: string | null
}

export const initialState: UserState = {
    isLoading: false,
    user: null,
    token: null,
    error: null,
}

export const UserReducer = createReducer(
    initialState,
    
    on(userActions.signUpEmail, (state) => ({ 
        ...state, 
        isLoading: true 
    })),
    on(userActions.signUpEmailSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        user: action.user,
    })),
    on(userActions.signUpEmailFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
    
    on(userActions.signInEmail, (state) => ({ 
        ...state, 
        isLoading: true 
    })),
    on(userActions.signInEmailSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        token: action.token,
    })),
    on(userActions.signInEmailFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    })),
    
    on(userActions.signOut, (state) => ({ 
        ...state, 
        isLoading: true 
    })),
    on(userActions.signOutSuccess, (state, _) => ({
        ...state,
        isLoading: false,
        token: null,
    })),
    on(userActions.signOutFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
)
