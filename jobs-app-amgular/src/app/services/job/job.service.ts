import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Job } from '@app/models/backend'
import { environment } from '@src/environments/environment'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class JobService {

    constructor(private httpClient: HttpClient) { }

    getJobs(): Observable<Job[]> {
        return this.httpClient.get<Job[]>(`${environment.baseApiUrl}/jobs`)
    }
}
