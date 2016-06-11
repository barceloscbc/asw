import {
    inject
} from 'aurelia-framework';
import LoginService from '../../service/LoginService';

@inject(LoginService)
export class Login {
    constructor(LoginService) {
        this.login = () => {
            if (this.email && this.password) {
                LoginService.login(this.email, this.password)
            } else {
                this.error = 'Please enter a email and password.';
            }
        }
    }

    activate() {
        this.email = '';
        this.password = '';
        this.error = '';
    }
}