import {Dispatcher} from 'flux';
import ActionTypes from './app/constants/ActionTypes';

class AppDispatcher extends Dispatcher {
    handleNotesAction(action) {
        this.dispatch({
            source: ActionTypes.NOTES_ACTION,
            action
        });
    }
    
    handlePageAction(action) {
        this.dispatch({
            source: ActionTypes.PAGE_ACTION,
            action
        });
    }
}

const DispatcherInstance = new AppDispatcher();
export default DispatcherInstance;