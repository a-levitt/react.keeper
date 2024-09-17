import React from 'react';
import Note from "../Note/Note.jsx";
import notes from "../../notes.js";

function createNotes(noteData) {
    return (
        <Note
            key={noteData.id}
            title={noteData.title}
            content={noteData.content}
        />
    );
}

function App() {

  return (
    <div>
        {notes.map(createNotes)}
    </div>
  )
}

export default App
