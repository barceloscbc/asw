import AuthService from 'service/LoginService';

import config from './auth-config';

export function configure(aurelia) {
    aurelia.use
        .defaultBindingLanguage()
        .defaultResources()
        .developmentLogging()
        .router()
        .history()
        .eventAggregator()
        .plugin('aurelia-animator-css')
        .plugin('materialize-css')
        .plugin('font-awesome')
        .plugin('aurelia-auth', (baseConfig) => {
            baseConfig.configure(config);
        });;

    aurelia.start().then(() => {
        var auth = aurelia.container.get(AuthService);
        let root = auth.isAuthenticated() ? 'view/app' : 'view/login/login';
        aurelia.setRoot(root);
    });
}