import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlDefine } from 'src/app/api/UrlDefine';
import { catchError, Observable, of, retry } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class SignInService {
    private readonly _retryTime = 0;
    constructor(
        private _httpClient: HttpClient
    ) { }


    signIn(userInfo: UserInfo): Observable<AuthResponse> {
        //
        // post
        const url = `${UrlDefine.protocol}${UrlDefine.baseDomain}${UrlDefine.api.auth.signIn}`;

        return this._httpClient.post<AuthResponse>(url, userInfo)
            .pipe(
                retry(this._retryTime),
                catchError((err: any) => {
                    console.warn(err)
                    return of();
                })
            )
    }
}
