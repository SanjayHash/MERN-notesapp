import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  // This function is triggered when a new note is added
  const handleNoteAdded = () => {
    setRefreshKey((prev) => prev + 1); // refresh NoteList
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📒 Notes App (MERN)</h1>
      <NoteForm onNoteAdded={handleNoteAdded} />
      <NoteList key={refreshKey} />
    </div>
  );
}

export default App;
