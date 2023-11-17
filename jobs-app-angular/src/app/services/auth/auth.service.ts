import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '@app/models/backend'
import { environment } from '@src/environments/environment'
import { Observable, of } from 'rxjs'

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    signUpEmail(formData: any): Observable<User> {
        return this.httpClient.post<User>(`${environment.baseApiUrl}/register`, formData)
    }
    
    signInEmail(formData: any): Observable<{ token: string }> {
        return this.httpClient.post<{ token: string }>(`${environment.baseApiUrl}/login`, formData)
    }
   
    signOut(): Observable<null> {
        if (localStorage.getItem('token'))
            localStorage.removeItem('token')
        return of(null)
    }
}
