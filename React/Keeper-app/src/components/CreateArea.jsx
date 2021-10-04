import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState();
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

    function expand(){
        setExpanded(true);
    }

    return (
    <div>
      <form className="create-note">
        {isExpanded && <input onChange={updateNote} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={expand} onChange={updateNote} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded}>
            <Fab onClick={addNote}>
                <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
