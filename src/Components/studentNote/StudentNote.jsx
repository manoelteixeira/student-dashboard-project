// src/Components/student/StudentDetailsNote.jsx
import "./studentNote.scss";

export default function StudentDetailsNote({ notes, setNotes }) {
  const handleForm = (event) => {
    event.preventDefault();
    const note = {
      commenter: event.target.commenter.value,
      comment: event.target.comment.value,
    };
    setNotes([...notes, note]);
  };

  return (
    <div className="student-details-note">
      <h2 className="student-details-note__title">1-on-1 Notes</h2>
      {notes.map((note, idx) => {
        return (
          <p key={`note-${idx}`} className="student-details-note__item">
            <span>{note.commenter}</span> says, {note.comment}
          </p>
        );
      })}
      <form onSubmit={handleForm} className="student-details-note__form">
        <fieldset>
          <legend>Add a Note</legend>

          <label htmlFor="commenter">Commenter Name</label>
          <input type="text" name="commenter" />

          <label htmlFor="comment">Comment</label>
          <input type="text" name="comment" />

          <button type="submit">Add</button>
        </fieldset>
      </form>
    </div>
  );
}
