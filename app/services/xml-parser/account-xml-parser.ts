import {XMLParserBase} from './xml-parser-base'
import {Character} from './models/character'

export class AccountXMLParser extends XMLParserBase {
    public parseAccountCharacters(accountCharacters:string) {
        let result:JQuery = this.parseXML(accountCharacters);
        let rows = $('row', result);
        let chars:Array<Character> = [];
        _.each(rows, (row:HTMLElement)=> {
            let $row:JQuery = $(row);
            let char:Character = <Character>{};
            char.name = $row.attr('name');
            char.id = $row.attr('characterID');
            char.corporationId = $row.attr('corporationID');
            char.corporationName = $row.attr('corpotationName');
            char.allianceId = $row.attr('allianceID');
            char.alliacnceName = $row.attr('allicanceName');
            char.factionId = $row.attr('factionID');
            char.factionName = $row.attr('factionName');

            chars.push(char);
        });

        return chars;
    }
}

