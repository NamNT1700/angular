import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
        private _router: Router,
    ) {
        this.signInForm = this._formBuilder.group({
            username: ['admin', [Validators.required]],
            password: ['Namso1234567!', [Validators.required]]
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        const formValue = this.signInForm.value;

        const info: UserInfo = {
            usename: formValue.username,
            password: formValue.password
        }

        console.log(info)

        this._signInService.signIn(info)
            .pipe()
            .subscribe((token: AuthResponse) => {
                // default success
                console.log(token.accessToken)
                this._router.navigate(['overview'])
            })
    }
}
