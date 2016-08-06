import _ from 'lodash';
import ChromeStorageService from './ChromeStorageService';
import Note from '../models/Note';

class NotesStorage extends ChromeStorageService {
    constructor() {
        super('notes');
    }

    add({headline, text}) {
        super.add(new Note(headline, text, window.performance.now()));
    }

    unset(id) {
        super.unset((note) => {
            return note.getId() !== id;
        });
    }

    update(id, updates) {
        var note = this.get((note) => {
            return note.getId() === id;
        });

        if (note) {
            if (updates.headline) {
                note.setHeadline(updates.headline);
            }
            if (updates.text) {
                note.setText(updates.text);
            }
        }
    }
    
    toLocalStorageData() {
        return super.toLocalStorageData(this.storageData.map(function(note) {
            return Note.toJSON(note);
        }));
    }
    
    fromLocalStorageData(jsonData) {
        var jsData = super.fromLocalStorageData(jsonData);
        
        return _.map(jsData, function(storageNote) {
            return Note.fromJSON(storageNote);
        });
    }
}

export default NotesStorage;