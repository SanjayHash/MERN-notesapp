import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";

const NoteList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteUpdated = (updatedNote) => {
    setNotes((prev) =>
      prev.map((note) => (note._id === updatedNote._id ? updatedNote : note))
    );
  };

  const handleNoteDeleted = (id) => {
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  if (loading) return <p>Loading notes...</p>;

  return (
    <div>
      <h2>All Notes</h2>
      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            onNoteUpdated={handleNoteUpdated}
            onNoteDeleted={handleNoteDeleted}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
