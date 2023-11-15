import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { JobService } from '@app/services/job/job.service'
import * as actions from './actions'

@Injectable()
export class JobEffects {
    getJobs$ = createEffect(() => this.actions$.pipe(
        ofType(actions.getJobs),
        mergeMap(() => this.jobService.getJobs().pipe(
                map((jobs) => actions.getJobsSuccess({ jobs })),
                catchError((error) => of(actions.getJobsFailure({ error: error.message })))
            )
        )
    ))

    constructor(private actions$: Actions, private jobService: JobService) { }
}
