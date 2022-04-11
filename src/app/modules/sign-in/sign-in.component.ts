import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInService } from './sign-in.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    // @ViewChild('signInNgForm') signInForm: FormGroup ;
    signInForm: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _signInService: SignInService,
    ) {
        this.signInForm = this._formBuilder.group({
            username: ['admin', [Validators.required]],
            password: ['Namso1234567!', [Validators.required]]
        });
    }

    ngOnInit(): void {

    }


    onSubmit() {
        const formValue: UserInfo = this.signInForm.value;

        const info: UserInfo = {
            username: formValue.username,
            password: formValue.password
        }

        console.log(info)

        // this._signInService.signIn(info)
        //     .pipe()
        //     .subscribe((token: any) => {
        //         console.log(token)
        //     })
    }
}
