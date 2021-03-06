import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public authService: AuthenticationService,
                public router: Router) {
    }

    canActivate(): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigateByUrl('/landing-page');
            return false;
        }

        return true;
    }
}
