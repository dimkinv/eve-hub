export class LocalStorage {
    static storageProp() {
        return function factory(target:Object, decoratedPropertyName:string) {

            Object.defineProperty(target, decoratedPropertyName, {
                get: function () {
                    let item = localStorage.getItem(decoratedPropertyName);
                    if (item === null) {
                        return item;
                    }

                    if (typeof item === 'object') {
                        return JSON.parse(item);
                    }

                    return item;

                },
                set: function (value) {
                    if (typeof value === 'object') {
                        value = JSON.parse(value)
                    }

                    localStorage.setItem(decoratedPropertyName, value);
                }
            })
        }
    }

    static clearStorageValue(key) {
        localStorage.removeItem(key);
    }

    static clearStorage() {
        localStorage.clear()
    }
}