import { Route } from "@angular/router";
import { AppComponent } from "./app.component";
import { SignInComponent } from "./modules/sign-in/sign-in.component";


export const appRoutes: Route[] = [
    {
        path: '',
        component: SignInComponent,
        // children: [
        //     {
        //         path: 'sign-in',
        //         loadChildren: () => import('../app/modules/sign-in/sign-in.module').then(m => m.SignInModule),
        //         component: SignInComponent
        //     },
        //     {

        //     }
        // ]
    },
]