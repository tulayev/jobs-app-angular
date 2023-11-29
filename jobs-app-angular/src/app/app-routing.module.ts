import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule)
            },
            {
                path: 'demo',
                loadChildren: () => import('./pages/demo/demo.module').then(x => x.DemoModule)
            },
            {
                path: 'static',
                loadChildren: () => import('./pages/static/static.module').then(x => x.StaticModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'static/welcome'
            }
        ]
    }, 
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'static/404'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
