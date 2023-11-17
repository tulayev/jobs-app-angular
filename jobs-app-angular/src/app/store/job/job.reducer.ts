import { createReducer, on } from '@ngrx/store'
import { Job } from '@app/models/backend'
import * as jobActions from './job.actions'

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
    
    on(jobActions.getJobs, (state) => ({ 
        ...state, 
        isLoading: true 
    })),
    on(jobActions.getJobsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        jobs: action.jobs,
    })),
    on(jobActions.getJobsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error,
    }))
)
