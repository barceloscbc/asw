import {
    bindable,
    inject
} from 'aurelia-framework';
import LoginService from 'service/LoginService';

@inject(LoginService)
export class NavBar {
    @bindable router = null;
    constructor(LoginService) {
        this.auth = LoginService;
    }
}