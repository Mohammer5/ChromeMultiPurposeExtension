import React from 'react';
require('../stylesheets/note.scss');

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultMaximized: false
        };
    }
    
    onKeyUp() {
        this.props.onChange({
            headline: this.refs.headline.value,
            text: this.refs.text.value,
            id: this.props.id
        });
    }

    toggleMinMax() {
        if (this.props.toggleMinMax) {
            this.props.toggleMinMax();
        }

        this.setState({defaultMaximized: !this.state.defaultMaximized});
    }
    
    render() {
        var maximized, minMaxIconClassName, showActions, noteClassName;

        maximized = (typeof this.props.maximized === 'undefined') ?
            this.state.defaultMaximized :
            this.props.maximized;
        minMaxIconClassName = 'note__icon note__' + (maximized ? 'minimize' : 'maximize');
        showActions = typeof this.props.showActions !== 'undefined' ? this.props.showActions : true;
        noteClassName = [
            "note",
            this.props.editMode ? 'note--edit-mode' : '',
            !maximized ? 'note--minimized' : ''
        ].join(" ").trim();

        return (
            <article ref="note" className={noteClassName}>
                <header
                    className="note__header"
                    style={{
                        display: showActions ? 'block' : "none"
                    }}
                >
                    <span className="note__icon note__delete" onClick={this.props.delete} />
                    <span className={minMaxIconClassName} onClick={this.toggleMinMax.bind(this)}/>
                </header>
                <main className="note__content">
                    <input
                        type="text"
                        ref="headline"
                        value={this.props.headline}
                        className="note__headline"
                        onChange={this.onKeyUp.bind(this)}
                        readOnly={!maximized}
                        placeholder="Headline..."
                    />
                    <textarea
                        onChange={this.onKeyUp.bind(this)}
                        className="note__editor"
                        ref="text"
                        value={this.props.text}
                        style={{display: maximized ? 'block' : 'none'}}
                        placeholder="Note text..."
                    />
                </main>
            </article>
        );
    }
}

export default Note;