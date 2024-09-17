import Note from "../Note/Note.jsx";
import notes from "../../notes.js";

function App() {

  return (
    <div>
        {notes.map( noteData => (
                <Note
                    key={noteData.id}
                    title={noteData.title}
                    content={noteData.content}
                />
            ))}
    </div>
  )
}

export default App
