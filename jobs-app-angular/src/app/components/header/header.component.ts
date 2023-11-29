import { Component } from '@angular/core'
import { AppState } from '@app/store'
import { isSignedInSelector, loadingSelector, signOut } from '@app/store/user'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isSignedIn$: Observable<boolean>
    loading$: Observable<boolean>

    constructor(private store: Store<AppState>) {
        this.isSignedIn$ = this.store.pipe(select(isSignedInSelector))
        this.loading$ = this.store.pipe(select(loadingSelector))
    }

    logout(): void {
        this.store.dispatch(signOut())
    }
}
