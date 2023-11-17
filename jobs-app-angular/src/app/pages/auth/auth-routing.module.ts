import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
    },
    {
        path: 'registration',
        loadChildren: () => import('./pages/registration/registration.module').then(x => x.RegistrationModule)
    },
    {
        path: 'email-confirm',
        loadChildren: () => import('./pages/email-confirm/email-confirm.module').then(x => x.EmailConfirmModule)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
