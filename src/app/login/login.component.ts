import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthUser} from '../model/auth-user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {MessageService} from '../service/message.service';
import {UserService} from '../service/user.service';
import {ChannelService} from '../service/channel.service';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorage} from '../service/token-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: AuthUser = new AuthUser();
    loginForm: FormGroup;
    hide = true;
    userId = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required, Validators.minLength(6)]);

    errorMsg: string;

    constructor(private authService: AuthenticationService,
                private formBuilder: FormBuilder,
                private router: Router,
                private messageService: MessageService,
                private userService: UserService,
                private channelService: ChannelService,
                private tokenStorage: TokenStorage) {
    }

    ngOnInit() {
        if ((this.tokenStorage.getToken())) {
            window.localStorage.clear();
        }

        this.loginForm = this.formBuilder.group({
            'userId': [this.user.userId, [
                Validators.required
            ]],
            'password': [this.user.password, [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(16)
            ]]
        });
    }

    // logging in a user
    login() {
        this.authService.login(this.user)
            .subscribe(data => {
                    this.tokenStorage.saveToken(data.token, data.userId);
                    // this.isValidated = this.authService.isAuthenticated();
                    this.messageService.clearMessages();
                    this.router.navigateByUrl('/dashboard');
                },
                (err: HttpErrorResponse) => {
                    this.errorMsg = err.error.message;
                    console.log('Backend Returned status code: ', err.status);
                    console.log('ResponseBody: ', err.error);
                });
    }

    // error messages on form validation
    getErrorMessage() {
        return this.userId.hasError('required') ? 'Cannot be left empty' :
            this.password.hasError('required') ? 'Cannot be left empty' :
                this.password.hasError('minLength') ? 'Password must contain 6 or more characters' : '';
    }

}
