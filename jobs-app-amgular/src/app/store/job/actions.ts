import { createAction, props } from '@ngrx/store'
import { Job } from '@app/models/backend'

export const getJobs = createAction('[Job] Get Jobs')

export const getJobsSuccess = createAction(
    '[Job] Get Jobs success',
    props<{ jobs: Job[] }>()
)

export const getJobsFailure = createAction(
    '[Job] Get Jobs failure',
    props<{ error: string }>()
)
