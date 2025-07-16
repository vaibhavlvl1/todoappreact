import React, { useRef, useState } from "react";

export default function NoteItem({ note, index, handleConfirm, handleDelete }) {
  const [newText, setNewText] = useState(note.text);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="noteItem">
      <span></span>

      <span className="noteText">
        {index}. {note.text}
      </span>
      <div className="buttonDiv">
        <button onClick={() => handleDelete(note.id)}>Delete</button>

        {isEditing && (
          <span>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              type="text"
            />{" "}
            <button
              onClick={() => {
                handleConfirm(newText, note.id);
                setIsEditing(false);
              }}
            >
              Confirm
            </button>
          </span>
        )}

        <button
          onClick={(e) => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
    </li>
  );
}
