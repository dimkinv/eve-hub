import {Http} from 'angular2/http'
import {_} from 'lodash/index'

export class XMLProxyBase {
    public baseUrl:string;

    constructor(private http:Http) {
        //TODO: should be moved into configurations later
        this.baseUrl = 'https://api.eveonline.com/eve/'
    }

    getFullEndpoint(endpointSuffix:string):string {
        return this.baseUrl + (endpointSuffix[0] === '/' ? endpointSuffix : '/' + endpointSuffix);
    }

    protected getXMLResult(eEndpoint: eEndpoints, params: ICharAuthentication) {
        let url;

        //TODO: this all should come from configurations
        switch (eEndpoint) {
            case eEndpoints.CHARACTER_INFO:
                url = this.getFullEndpoint('CharacterInfo.xml.aspx') + this._buildQueryString(params);
                break;
        }

        return this.http.get(url)
            .toPromise()
            .then(res => res.text())
            .catch(XMLProxyBase._handleError);
    }

    private static _handleError(error: any){
        //TODO: should be more informative
        return Promise.reject(error);
    }

    private _buildQueryString(params: {string, string}){
        let queryString = '?';
        _.each(params, (val, key)=>{
            queryString += key + '=' + val + '&';
        });

        return queryString;
    }
}

export enum eEndpoints{
    CHARACTER_INFO
}

export interface ICharAuthentication{
    vCode: string;
    keyID: string;
}