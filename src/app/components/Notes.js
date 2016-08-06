import React, {Component} from 'react';
import _ from 'lodash';
import {Container} from 'flux/utils';
import NotesActions from '../actions/NotesActions';
import NotesStore from '../stores/NotesStore';
import ActiveNoteStore from '../stores/ActiveNoteStore';
import Note from './Note';
require('../stylesheets/notes.scss');

class Notes extends Component {
    static getStores() {
        return [NotesStore, ActiveNoteStore];
    }

    static calculateState() {
        return {
            notes: _.cloneDeep(NotesStore.getState().getAll()),
            activeNoteId: ActiveNoteStore.getActiveStoreId()
        };
    }

    static deleteNote(id) {
        if (id === this.state.activeNoteId) {
            NotesActions.deleteActiveNote(id);
        } else {
            NotesActions.delete(id);
        }
    }

    toggleMinMax(noteId) {
        var currentActiveNote = this.state.activeNoteId;

        NotesActions.unsetActiveNote();
        if (currentActiveNote !== noteId) {
            NotesActions.setActiveNote(noteId);
        }
    }
    
    render() {
        return (
            <div className="notes">
                {
                    this.state.notes.map((note, noteIndex) => {
                        var noteId = note.getId();
                        return (
                            <Note 
                                headline={note.getHeadline()}
                                text={note.getText()}
                                key={noteIndex}
                                delete={Notes.deleteNote.bind(this, noteId)}
                                maximized={this.state.activeNoteId === noteId}
                                toggleMinMax={this.toggleMinMax.bind(this, noteId)}
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