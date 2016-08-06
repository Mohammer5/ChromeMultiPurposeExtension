import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Notes from './Notes';
import PageConstants from '../constants/PageConstants';
import PageActions from '../actions/PageAction';

require('../stylesheets/app.scss');

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.syncTimer = null;
        this.style = {
            backgroundImage: 'url(images/image_2.jpg)'
        };
    }
    
    componentDidMount() {
        PageActions.pageMounted();

        $(this.refs.appWrapper).on('keyup mousemove', this.resetSyncTimer.bind(this));
        $(window).on('beforeunload', this.syncData.bind(this));
        $(this.refs.contentWrap).scrollbar();
    }
    
    syncData() {
        PageActions.syncData();
        this.syncTimer = null;
    }

    resetSyncTimer() {
        if (this.syncTimer) {
            clearTimeout(this.syncTimer);
        }
        
        this.syncTimer = setTimeout(this.syncData.bind(this), PageConstants.IDLE_TIME_TO_SYNC);
    }

    render() {
        return (
            <div ref="appWrapper" className="app__wrapper" style={this.style}>
                <AppHeader />
                <main className="app__content">
                    <div ref="contentWrap" className="app__content-wrap scrollbar-inner">
                        <Notes />
                    </div>
                </main>
                <AppFooter />
            </div>
        );
    }
}

export default App;