import {Pipe} from 'angular2/core';

@Pipe({
    name: 'charIdToImg'
})
export class CharIdToImgPipe {
    transform(charId) {
        return 'https://image.eveonline.com/Character/' + charId + '_512.jpg'
    }
}