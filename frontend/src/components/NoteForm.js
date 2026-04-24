import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/notes", {
        title,
        content,
      });

      onNoteAdded(res.data); // send new note to parent
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to add note");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h3>Add a New Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: "100%", padding: "8px", height: "80px", marginBottom: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
