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
    // signInForm: FormGroup;

    username = '';
    password = ''

    constructor(
        // private _formBuilder: FormBuilder
        private _signInService: SignInService,
    ) {
        // this.signInForm = this._formBuilder.group({
        //     username: ['admin', [Validators.required]],
        //     password: ['Namso1234567!', [Validators.required]]
        // });
    }

    ngOnInit(): void {
        // this.signInForm = this._formBuilder.group({
        //     username: ['admin', [Validators.required]],
        //     password: ['Namso1234567!', [Validators.required]]
        // });
    }


    onSubmit() {
        // console.log(this.username, this.password)
        const info: UserInfo = {
            username: this.username,
            password: this.password
        }
        this._signInService.signIn(info)
            .pipe()
            .subscribe((token: any) => {
                console.log(token)
            })
    }

    onChangeName(e: any) {
        this.username = e.target.value;

    }
    onChangePassword(e: any) {
        this.password = e.target.value;
    }
}
