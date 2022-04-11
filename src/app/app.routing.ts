import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./modules/main-layout/main-layout.component";
import { SignInComponent } from "./modules/sign-in/sign-in.component";


export const appRoutes: Route[] = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('../app/modules/sign-in/sign-in.module').then(m => m.SignInModule),
                component: SignInComponent
            },
        ]
    },
]