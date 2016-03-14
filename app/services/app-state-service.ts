import {Injectable} from 'angular2/core';
import {LocalStorage} from '../local-storage-decorator/local-storage.decorator'

@Injectable()
export class AppStateService{
    @LocalStorage.storageProp()
    public keyID:string;

    @LocalStorage.storageProp()
    public vCode:string;
}