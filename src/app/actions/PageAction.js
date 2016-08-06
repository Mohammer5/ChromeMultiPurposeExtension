import Dispatcher from "../../dispatcher";
import PageConstants from '../constants/PageConstants';

class PageActions {
    static pageMounted() {
        Dispatcher.handlePageAction({
            type: PageConstants.PAGE_LOAD,
            data: {}
        });
    }

    static syncData() {
        Dispatcher.handlePageAction({
            type: PageConstants.SYNC_DATA,
            data: {}
        });
    }
}

export default PageActions;