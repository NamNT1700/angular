import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./modules/main-layout/main-layout.component";
import { OverviewComponent } from "./modules/overview/overview.component";
import { SignInComponent } from "./modules/sign-in/sign-in.component";


export const appRoutes: Route[] = [
    // set default page to redirect
    {
        path: '', pathMatch: 'full', redirectTo: 'overview'
    },

    // redirect incorrect path to page 404
    // {
    //     path: '**', redirectTo: 'dashboard'
    // },

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import('../app/modules/overview/overview.module').then(m => m.OverviewModule),
                component: OverviewComponent
            },
        ]
    },
    {
        path: 'sign-in',
        loadChildren: () => import('../app/modules/sign-in/sign-in.module').then(m => m.SignInModule),
        component: SignInComponent,
    },
]