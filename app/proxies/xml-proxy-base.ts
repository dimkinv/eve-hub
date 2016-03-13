export class XMLProxyBase {
    public baseUrl:string;

    constructor() {
        //TODO: should be moved into configurations later
        this.baseUrl = 'https://api.eveonline.com/eve/'
    }

    getFullEndpoint(endpointSuffix:string):string {
        return this.baseUrl + (endpointSuffix[0] === '/' ? endpointSuffix : '/' + endpointSuffix);
    }

    private _getXMLResult(eEndpoint: eEndpoints, queryString:string, body?:any) {
        let url;

        //TODO: this all should come from configurations
        switch (eEndpoint) {
            case eEndpoints.CHARACTER_INFO:
                url = this.getFullEndpoint('CharacterInfo.xml.aspx')
        }
    }
}

export enum eEndpoints{
    CHARACTER_INFO
}