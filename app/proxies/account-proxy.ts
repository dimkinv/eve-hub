import {Injectable} from 'angular2/core'
import {Http} from 'angular2/http'
import {XMLProxyBase, eEndpoints} from './xml-proxy-base'
import {AccountXMLParser} from '../services/xml-parser/account-xml-parser'

export class AccountProxy extends XMLProxyBase{
    constructor(http: Http){
        super(http);

    }

    public getCharacters(){
        return this.getXMLResult(eEndpoints.ACCOUNT_CHARACTERS,{
            keyID: '5105576',
            vCode: 'DrVegif62MekwyI4oSU8zuGRjzzaaKCsW2WvUHJRyDhFYI8vfXNLZcPkbF75B1BZ'
        }).then((res)=>{
            let accountParser = new AccountXMLParser();
            return accountParser.parseAccountCharacters(res);
        });
    }
}