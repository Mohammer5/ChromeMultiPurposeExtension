import Dispatcher from "../../dispatcher";
import NotesConstants from '../constants/NotesContants';

const NotesActions = {
    create: function(noteData) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_CREATE,
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
    
    update: function(noteData) {
        Dispatcher.handleNotesAction({
            type: NotesConstants.NOTES_UPDATE,
            data: noteData
        });
    }
};

export default NotesActions;