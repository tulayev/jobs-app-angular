import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'
import { ReactiveFormsModule } from '@angular/forms'
import { SharedComponent } from './shared.component'

import { ButtonsModule, ControlsModule, IndicatorsModule } from '@app/shared'

@NgModule({
    declarations: [
        SharedComponent
    ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        ReactiveFormsModule,
        ButtonsModule,
        ControlsModule,
        IndicatorsModule
    ]
})
export class SharedModule { }