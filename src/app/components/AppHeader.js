import React from 'react';
import $ from 'jquery';
import NewNoteLightbox from './NewNoteLightbox';
import NoteActions from '../actions/NotesActions';

require('../stylesheets/header.scss');

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteFormOpened: false
        };
    }

    componentDidMount() {
        $(this.refs.initNewNote).on('click', () => {
            this.setState({newNoteFormOpened: true});
        });
    }

    onCreate(noteData) {
        NoteActions.create(noteData);
        this.closeNewNoteLightbox();
    }

    closeNewNoteLightbox() {
        this.setState({newNoteFormOpened: false});
    }

    render() {
        return (
            <header className="app__header header">
                <button ref="initNewNote" className="header__init-new-note">New note</button>
                <NewNoteLightbox
                    onCreate={this.onCreate.bind(this)}
                    show={this.state.newNoteFormOpened}
                    onClose={this.closeNewNoteLightbox.bind(this)}
                />
            </header>
        );
    }
}

export default AppHeader;