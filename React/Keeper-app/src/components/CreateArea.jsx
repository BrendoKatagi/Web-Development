import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function updateNote(event){
        const {name, value} = event.target;

        setNote((prevNote) => {   
            return {
                ...prevNote,
                [name] : value
            };
        });
    }

    function addNote(event){
        props.defineNotes(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
    <div>
      <form>
        <input onChange={updateNote} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={updateNote} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <Fab onClick={addNote}>
            <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
