import React from 'react';
require("../stylesheets/lightbox.scss");

class Lightbox extends React.Component {
    constructor(props) {
        super(props);
    }
    
    getLightboxContent() {
        return null;
    }
    
    render() {
        var style = {
            display: this.props.show ? 'block' : "none"
        };
        
        return (
            <div className="lightbox" style={style}>
                <div className="lightbox__background" onClick={this.props.onClose}></div>
                <div className="lightbox__content-wrapper">
                    <span className="lightbox__close" 
                          ref="lightboxClose" 
                          onClick={this.props.onClose}>
                        Close
                    </span>
                    <div className="lightbox__content">
                        {this.getLightboxContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lightbox;