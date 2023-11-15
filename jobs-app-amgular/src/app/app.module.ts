import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { HeaderComponent } from './components/header/header.component'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core'
import { NotificationModule } from '@app/services'
import { environment } from '@src/environments/environment'
import { AppState } from './store'
import { JobEffects, JobReducer } from './store/job'

const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: { day: 'numeric', month: 'numeric', year: 'numeric' }
    },
    display: {
        dateInput: { day: 'numeric', month: 'short', year: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' }
    }
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot<AppState>({ jobs: JobReducer }),
        EffectsModule.forRoot([JobEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
        MatNativeDateModule,
        NotificationModule.forRoot(),
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
