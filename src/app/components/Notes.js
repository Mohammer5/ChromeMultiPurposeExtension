import React, {Component} from 'react';
import _ from 'lodash';
import {Container} from 'flux/utils';
import NotesActions from '../actions/NotesActions';
import NotesStore from '../stores/NotesStore';
import Note from './Note';
require('../stylesheets/notes.scss');

class Notes extends Component {
    static getStores() {
        return [NotesStore];
    }

    static calculateState() {
        var notes = _.cloneDeep(NotesStore.getState().getAll());
        return {
            notes
        };
    }

    static deleteNote(id) {
        NotesActions.delete(id);
    }
    
    render() {
        return (
            <div className="notes">
                {
                    this.state.notes.map((note, noteIndex) => {
                        return (
                            <Note 
                                headline={note.getHeadline()}
                                text={note.getText()}
                                key={noteIndex}
                                delete={Notes.deleteNote.bind(this, note.getId())}
                            />
                        ); 
                    })
                }
            </div>
        );
    }
}

const container = Container.create(Notes);
export default container;