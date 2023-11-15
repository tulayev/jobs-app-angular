import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { AppState } from './store'
import { Observable } from 'rxjs'
import { Job } from './models/backend'
import { errorSelector, getJobs, isLoadingSelector, jobsSelector } from './store/job'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Jobs App'
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    jobs$: Observable<Job[]>

    constructor(private store: Store<AppState>) {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.jobs$ = this.store.pipe(select(jobsSelector))
    }
    
    ngOnInit(): void {
        this.store.dispatch(getJobs())
    }
}
