import {ReduceStore} from 'flux/utils';
import Dispatcher from '../../dispatcher';
import NotesConstants from '../constants/NotesContants';
import ActionTypes from '../constants/ActionTypes';
import NotesStore from './NotesStore';

class ActiveNoteStore extends ReduceStore {
    getInitialState() {
        return {
            activeNoteId: null
        };
    }

    getActiveStoreId() {
        return this._state.activeNoteId;
    }

    reduce(state, {source, action}) {
        if (source === ActionTypes.NOTES_ACTION) {
            let notesStoreToken = NotesStore.getDispatchToken();

            if (NotesConstants.SET_ACTIVE_NOTE === action.type) {
                Dispatcher.waitFor([notesStoreToken]);
                let notes = NotesStore.getNotes();
                let activeId = action.data.id;

                if (!NotesStore.getNoteNyId(activeId)) {
                    state.activeNoteId = null;
                    this.__emitChange();
                } else {
                    state.activeNoteId = activeId;
                    this.__emitChange();
                }
            } else if (NotesConstants.UNSET_ACTIVE_NOTE === action.type) {
                Dispatcher.waitFor([notesStoreToken]);
                state.activeNoteId = null;
                this.__emitChange();
            }
        }

        return state;
    }
}

const ActiveNoteStoreInstance = new ActiveNoteStore(Dispatcher);
export default ActiveNoteStoreInstance;