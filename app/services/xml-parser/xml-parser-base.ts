export abstract class XMLParserBase{

    public parseXML(xmlString: string){
        return $.parseXML(xmlString);
    }
}