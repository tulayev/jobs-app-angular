import { createReducer, on } from '@ngrx/store'
import * as actions from './actions'
import { Job } from '@app/models/backend'

export interface JobState {
    isLoading: boolean
    jobs: Job[]
    error: string | null
}

export const initialState: JobState = {
    isLoading: false,
    jobs: [],
    error: null,
}

export const JobReducer = createReducer(
    initialState,
    
    on(actions.getJobs, (state) => ({ 
        ...state, 
        isLoading: true 
    })),
    on(actions.getJobsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        jobs: action.jobs,
    })),
    on(actions.getJobsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
)
