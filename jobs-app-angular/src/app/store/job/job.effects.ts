import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { JobService } from '@app/services/job/job.service'
import * as jobActions from './job.actions'

@Injectable()
export class JobEffects {
    getJobs$ = createEffect(() => this.actions$.pipe(
        ofType(jobActions.getJobs),
        mergeMap(() => this.jobService.getJobs().pipe(
                map((jobs) => jobActions.getJobsSuccess({ jobs })),
                catchError((error) => of(jobActions.getJobsFailure({ error: error.message })))
            )
        )
    ))

    constructor(private actions$: Actions, private jobService: JobService) { }
}
