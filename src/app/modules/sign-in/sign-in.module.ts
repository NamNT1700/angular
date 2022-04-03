import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './sign-in.service';



@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        SignInService,
    ]
})
export class SignInModule { }
