import {Injectable} from 'angular2/core'
import {XMLProxyBase} from './xml-proxy-base'

@Injectable()
class CharacterProxy extends XMLProxyBase{
    constructor(){
        super.constructor();
    }
}