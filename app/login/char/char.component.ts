import {Component, Input} from 'angular2/core'
import {CharIdToImgPipe} from '../../services/xml-parser/pipes/char-is-to-img.pipe'
import {Character} from '../../services/xml-parser/models/character'

@Component({
    selector: 'character',
    template: '<img [src]="char.id | charIdToImg"/>',
    pipes:[CharIdToImgPipe]
})
export class CharComponent{
    @Input()
    public char:Character;
}