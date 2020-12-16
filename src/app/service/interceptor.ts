import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {TokenStorage} from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private token: TokenStorage, private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        if (this.token.getToken() != null) {
            authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.token.getToken()}`
                }
            });
            console.log('from interceptor');
            console.log(authReq);
        }

        return next.handle(authReq);
    }
}
