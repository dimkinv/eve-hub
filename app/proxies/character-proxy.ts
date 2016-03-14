import {Injectable} from 'angular2/core'
import {XMLProxyBase, eEndpoints, ICharAuthentication} from './xml-proxy-base'

@Injectable()
class CharacterProxy extends XMLProxyBase{
    constructor(){
        super();
    }

    get(){
        this.getXMLResult(eEndpoints.CHARACTER_INFO, {
            keyID: '5105576',
            vCode: 'DrVegif62MekwyI4oSU8zuGRjzzaaKCsW2WvUHJRyDhFYI8vfXNLZcPkbF75B1BZ'
        })
    }
}