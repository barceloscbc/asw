import {
    inject
} from 'aurelia-framework';
import LoginService from 'service/LoginService';

@inject(LoginService)
export class Home {
    constructor(LoginService) {
        this.auth = LoginService;
    }
}

export class ToJSONValueConverter {
    toView(obj) {
        if (obj) {
            return JSON.stringify(obj, null, 2)
        }
    }
}