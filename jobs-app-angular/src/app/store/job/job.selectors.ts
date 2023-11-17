import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'

export const selectFeature = (state: AppState) => state.jobs

export const loadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
)

export const jobsSelector = createSelector(
    selectFeature,
    (state) => state.jobs
)

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
)
