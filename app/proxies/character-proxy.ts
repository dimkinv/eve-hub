import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {XMLProxyBase, eEndpoints, ICharAuthentication} from './xml-proxy-base'

@Injectable()
export class CharacterProxy extends XMLProxyBase{
    constructor(http:Http){
        super(http);
    }

    getCharacterInfo(){
        return this.getXMLResult(eEndpoints.CHARACTER_INFO, {
            keyID: '5105576',
            vCode: 'DrVegif62MekwyI4oSU8zuGRjzzaaKCsW2WvUHJRyDhFYI8vfXNLZcPkbF75B1BZ'
        })
    }

    getAccountStatus(){
        return this.getXMLResult(eEndpoints.ACCOUNT_STATUS, {
            keyID: '5105576',
            vCode: 'DrVegif62MekwyI4oSU8zuGRjzzaaKCsW2WvUHJRyDhFYI8vfXNLZcPkbF75B1BZ'
        })
    }
}