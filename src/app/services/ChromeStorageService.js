import _ from 'lodash';

class ChromeStorageService {
    constructor(storageNamespace) {
        this.storageNamespace = storageNamespace;
        this.storageData = [];
    }

    fetch() {
        if (!localStorage[this.storageNamespace]) {
            this.sync();
        }

        this.storageData = this.fromLocalStorageData(JSON.parse(localStorage[this.storageNamespace]));
        if (__DEV__) {
            console.log('Fetched data from localStorage of "' +  this.constructor.name + '"');
        }
    }
    
    sync() {
        localStorage[this.storageNamespace] = JSON.stringify(this.toLocalStorageData(this.storageData));
        if (__DEV__) {
            console.log('Synchronized data of "' +  this.constructor.name + '"');
        }
    }

    get(findCallback) {
        return _.find(this.storageData, findCallback);
    }
    
    getAll() {
        return this.storageData;
    }
    
    add(value) {
        this.storageData.push(value);
    }

    unset(filterCallback) {
        this.storageData = _.filter(this.storageData, filterCallback);
    }

    fromLocalStorageData(jsonData) {
        return JSON.parse(jsonData);
    }

    toLocalStorageData(jsData) {
        return JSON.stringify(jsData);
    }
}

export default ChromeStorageService;