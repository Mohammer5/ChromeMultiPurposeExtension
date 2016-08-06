class Note {
    constructor(headline, text, id) {
        this._headline = headline || '';
        this._text = text || '';
        this._id = id || null;
    }
    
    setHeadline(headline) {
        this._headline = headline;
    }
    
    getHeadline() {
        return this._headline;
    }
    
    setText(text) {
        this._text = text;
    }
    
    getText() {
        return this._text;
    }
    
    getId() {
        return this._id;
    }
    
    static toJSON(note) {
        return JSON.stringify({
            headline: note._headline,
            text: note._text,
            id: note._id
        });
    }
    
    static fromJSON(jsonNote) {
        var note = JSON.parse(jsonNote);
        return new Note(note.headline, note.text, note.id);
    }
}

export default Note;