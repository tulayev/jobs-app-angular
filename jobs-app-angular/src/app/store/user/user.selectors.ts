import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'

export const selectFeature = (state: AppState) => state.user

export const loadingSelector = createSelector(
    selectFeature,
    (state) => state.loading
)

export const userSelector = createSelector(
    selectFeature,
    (state) => state.user
)

export const tokenSelector = createSelector(
    selectFeature,
    (state) => state.token
)

export const isSignedInSelector = createSelector(
    selectFeature,
    (state) => state.isSignedIn
)

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)
