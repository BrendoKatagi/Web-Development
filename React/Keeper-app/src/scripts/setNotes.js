import Note from "../components/Note";

function setNote(note){
    return(
        <Note
            key = {note.key}
            title = {note.title}
            content = {note.content}
        />
    );
}

export default setNote;