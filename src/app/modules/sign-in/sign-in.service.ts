import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlDefine } from 'src/app/api/UrlDefine';
import { catchError, Observable, retry } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SignInService {
    readonly retryTime = 2;
    constructor(
        private _httpClient: HttpClient
    ) { }


    signIn(userInfo: UserInfo): Observable<any> {
        //
        // post
        const url = `${UrlDefine.protocol}${UrlDefine.baseDomain}${UrlDefine.api.auth.signIn}`;

        return this._httpClient.post(url, userInfo).pipe(
            retry(this.retryTime),
            catchError((err: any) => {
                console.warn(err)
                return err;
            })
        )
    }
}
