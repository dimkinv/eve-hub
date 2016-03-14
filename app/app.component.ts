import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LoginComponent} from './login/login.component';
import {AppStateService} from './services/app-state-service'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.template.html',
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, AppStateService]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }
])
export class AppComponent {
    constructor(private _router:Router, private appStateService: AppStateService) {
        if (!appStateService.keyID || !appStateService.vCode) {
            _router.navigate(['Login']);
        }
    }
}