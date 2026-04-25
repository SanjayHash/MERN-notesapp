import React, { useState } from "react";
import axios from "axios";

const NoteItem = ({ note, onNoteUpdated, onNoteDeleted }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  // ✅ Update Note
  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://13.233.47.200:3000/api/notes/${note._id}`, {
        title,
        content,
      });
      onNoteUpdated(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating note:", err);
      alert("Failed to update note");
    }
  };

  // ❌ Delete Note
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await axios.delete(`http://13.233.47.200:3000/api/notes/${note._id}`);
      onNoteDeleted(note._id);
    } catch (err) {
      console.error("Error deleting note:", err);
      alert("Failed to delete note");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "5px" }}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", marginBottom: "5px", height: "70px" }}
          />
          <button onClick={handleUpdate} style={{ marginRight: "8px" }}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => setIsEditing(true)} style={{ marginRight: "8px" }}>
            Edit
          </button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default NoteItem;
