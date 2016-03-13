import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LocalStorage} from './local-storage-decorator/local-storage.decorator';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.template.html',
    directives: [NavBarComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }
])
export class AppComponent {
    @LocalStorage.storageProp()
    public keyId:string;

    @LocalStorage.storageProp()
    public vCode:string;

    constructor(private _router:Router) {
        if (!this.keyId || !this.vCode) {
            _router.navigate(['Login']);
        }
    }
}