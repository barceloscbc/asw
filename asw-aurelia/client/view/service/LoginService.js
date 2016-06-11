import {
    Aurelia,
    inject
} from 'aurelia-framework';
import HttpClient from 'aurelia-http-client';
import config from '../config';

@inject(Aurelia, HttpClient)
export default class LoginService {

    session = null

    // As soon as the AuthService is created, we query local storage to
    // see if the login information has been stored. If so, we immediately
    // load it into the session object on the AuthService.
    constructor(Aurelia, HttpClient) {
        /*  HttpClient.configure(http => {
              http.withBaseUrl(config.baseUrl);
          });*/

        this.http = HttpClient;
        this.app = Aurelia;

        this.session = JSON.parse(localStorage[config.tokenName] || "123");
    }

    login(username, password) {
        /* this.http
             .post(config.loginUrl, {
                 username,
                 password
             })
             .then((response) => response.content)
             .then((session) => {

                 // Save to localStorage
                 localStorage[config.tokenName] = JSON.stringify(session);

                 // .. and to the session object
                 this.session = session;

                 // .. and set root to app.
                 this.app.setRoot('app');
             });*/

        this.session = "1234";
        localStorage[config.tokenName] = JSON.stringify(this.session);
        this.app.setRoot('app');
    }

    logout() {

        // Clear from localStorage
        localStorage[config.tokenName] = null;

        // .. and from the session object
        this.session = null;

        // .. and set root to login.
        this.app.setRoot('login')
    }

    isAuthenticated() {
        return true; //this.session == null;
    }

    can(permission) {
        return true; // why not?
    }
}