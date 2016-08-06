import {ReduceStore} from 'flux/utils';
import NotesStorage from '../services/NotesStorage';
import NotesConstants from '../constants/NotesContants';
import PageConstants from '../constants/PageConstants';
import ActionTypes from '../constants/ActionTypes';
import Dispatcher from '../../dispatcher';

class NotesStore extends ReduceStore {
    getNotes() {
        return this._state.getAll();
    }
    
    getNoteNyId(id) {
        return this._state.get((note) => {
            return note.getId() === id;
        });
    }
    
    getInitialState() {
        return new NotesStorage();
    }

    reduce(state, {source, action}) {
        if (source === ActionTypes.NOTES_ACTION) {
            if (NotesConstants.NOTES_CREATE === action.type) {
                state.add(action.data);
                this.__emitChange();
            } else if (NotesConstants.NOTES_DELETE === action.type) {
                state.unset(action.data.id);
                this.__emitChange();
            } else if (NotesConstants.NOTES_CREATE === action.type) {
                state.notes.update(action.data.id, {
                    headline: action.data.headline,
                    text: action.data.text
                });
                this.__emitChange();
            }
        } else if (source === ActionTypes.PAGE_ACTION) {
            if (PageConstants.PAGE_LOAD === action.type) {
                state.fetch();
                this.__emitChange();
            } else if (PageConstants.SYNC_DATA === action.type) {
                state.sync();
                this.__emitChange();
            }
        }

        return state;
    }
}

const NotesStoreInstance = new NotesStore(Dispatcher);
export default NotesStoreInstance;
