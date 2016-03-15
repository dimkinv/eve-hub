import {Component} from 'angular2/core';
import {AccountProxy} from '../proxies/account-proxy';
import {CharIdToImgPipe} from '../services/xml-parser/pipes/char-is-to-img.pipe'
import {Character} from '../services/xml-parser/models/character'
import {CharComponent} from './char/char.component'

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.template.html',
    providers: [AccountProxy],
    pipes:[CharIdToImgPipe],
    directives:[CharComponent],
})
export class LoginComponent{
    constructor(private characterProxy: AccountProxy){

    }

    public chars: Array<Character>;

    public validateAndGo(){
        this.characterProxy.getCharacters()
        .then((chars) => {
            this.chars = chars;
        })
    }
}