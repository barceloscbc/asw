import {
    inject
} from 'aurelia-framework';
import LoginService from 'service/LoginService';

@inject(LoginService)
export class App {
    constructor(LoginService) {
        this.auth = LoginService;
    }

    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([{
            route: ['', 'home'],
            title: 'Home',
            nav: true,
            moduleId: 'view/home/home'
        }, {
            route: 'cadastro',
            title: 'Cadastro',
            nav: true,
            moduleId: 'cadastro',
            settings: {
                subMenu: [{
                    href: '#/usuario',
                    title: 'Usuário'
                }]
            }
        }, {
            route: 'consulta',
            title: 'Consulta',
            nav: true,
            moduleId: 'consulta',
            settings: {
                subMenu: [{
                    href: '#/nota',
                    title: 'Nota'
                }, {
                    href: '#/historico',
                    title: 'Histórico Escolar'
                }]
            }
        }, {
            route: 'nota',
            title: 'Nota',
            nav: false,
            moduleId: 'view/nota/nota'
        }, {
            route: 'historico',
            title: 'Histórico Escolar',
            nav: false,
            moduleId: 'view/historico/historico'
        }, {
            route: 'usuario',
            title: 'Usuário',
            nav: false,
            moduleId: 'view/usuario/usuario'
        }]);

        this.router = router;
    }
}