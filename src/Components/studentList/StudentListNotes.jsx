/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/StudentList/StudentListNotes.jsx

import "./styles/studentListNotes.scss";

export default function StudentListNotes({ notes, setNotes, updateNotes }) {
  const handleForm = (event) => {
    event.preventDefault();
    const note = {
      commenter: event.target.commenter.value,
      comment: event.target.comment.value,
    };

    setNotes([...notes, note]);
    updateNotes();
    // event.target.commenter.value = "";
    // event.target.comment.value = "";
  };

  return (
    <section className="student-list__notes">
      <h3> 1-on-1 Notes</h3>
      <form onSubmit={handleForm}>
        <fieldset>
          <legend>Add a Comment</legend>
          <div className="student-list__form-group">
            <label htmlFor="comment"> Comment: </label>
            <input type="text" id="comment" name="comment" />
          </div>
          <div className="student-list__form-group">
            <label htmlFor="commenter"> Commenter: </label>
            <input type="text" id="commenter" name="commenter" />
          </div>
          <button type="submit"> Add</button>
        </fieldset>
      </form>
      <ul className="student-list__comments">
        {notes.map((note, idx) => {
          return (
            <li key={`note-${idx}`}>
              <strong>{note.commenter}</strong> say, {note.comment}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
