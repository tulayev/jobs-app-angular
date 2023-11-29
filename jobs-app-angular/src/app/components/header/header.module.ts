import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header.component'
import { SpinnerModule } from '@app/shared/indicators'
import { RouterModule } from '@angular/router'



@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SpinnerModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
