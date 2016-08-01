import React from "react";
import ReactDOM from "react-dom";

require("../stylesheets/index.scss");

class Test extends React.Component {
    constructor(props) {
        super(props);

        this.className = props.name || "default";
    }

    render() {
        return (
            <div className={this.className}></div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById('app'));