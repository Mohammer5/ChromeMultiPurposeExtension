import Dispatcher from "../../dispatcher";
import NotesConstants from '../constants/NotesContants';

const NotesActions = {
    create: function(noteData) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_CREATE,
            data: noteData
        });
    },

    update: function(noteData) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_UPDATE,
            data: noteData
        });
    },
    
    delete: function(id) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_DELETE,
            data: {
                id
            }
        });
    },
    
    deleteActiveNote: function(id) {
        this.unsetActiveNote();
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_DELETE,
            data: {
                id
            }
        });
    },
    
    setActiveNote: function(id) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.SET_ACTIVE_NOTE,
            data: {
                id
            }
        });
    },
    
    unsetActiveNote: function() {
        Dispatcher.handleNotesAction({
            type: NotesConstants.UNSET_ACTIVE_NOTE,
            data: {}
        });
    }
};

export default NotesActions;