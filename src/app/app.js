import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/App';

class App {
    constructor(containerDOMNode) {
        ReactDOM.render(<AppComponent />, containerDOMNode);
    }
}

export default App;