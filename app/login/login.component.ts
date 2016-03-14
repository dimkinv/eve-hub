import {Component} from 'angular2/core';
import {CharacterProxy} from '../proxies/character-proxy';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.template.html',
    providers: [CharacterProxy]
})
export class LoginComponent{
    constructor(private characterProxy: CharacterProxy){

    }

    public validateAndGo(){
        this.characterProxy.getAccountStatus()
        .then((res) => {
            console.log(res);
        })
    }
}