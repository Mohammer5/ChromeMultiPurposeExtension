import React from 'react';
import Lightbox from './Lightbox';
import Note from './Note';
require('../stylesheets/newNoteLightbox.scss');

class NewNoteLightbox extends Lightbox {
    constructor(props) {
        super(props);

        this.state = this.getDefaultNoteState();
    }

    getDefaultNoteState() {
        return {
            note: {
                headline: '',
                text: ''
            }
        };
    }

    onContentChange(noteContents) {
        this.setState({note: noteContents});
    }

    onCreate() {
        this.props.onCreate(this.state.note);
        this.setState(this.getDefaultNoteState());
    }

    onCancel() {
        this.props.onClose(this.state.note);
        this.setState(this.getDefaultNoteState());
    }

    getLightboxContent() {
        return (
            <div className="new-note-lightbox">
                <Note onChange={this.onContentChange.bind(this)}
                      maximized={true}
                      draggable={false}
                      showActions={false}
                />
                <div className='new-note-lightbox__actions'>
                    <input className='new-note-lightbox__button' onClick={this.onCreate.bind(this)} type="submit" value="Create note" />
                    <button className='new-note-lightbox__button' onClick={this.onCancel.bind(this)}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default NewNoteLightbox;
export {NewNoteLightbox};