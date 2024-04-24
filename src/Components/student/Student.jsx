// src/Components/students/Student.jsx
import { getStudentProfile } from "../../helperFunctions";
import "./student.scss";

export default function Student({ student }) {
  const { name, username, birthday, profilePhoto } = getStudentProfile(student);
  return (
    <div className="student">
      <img src={profilePhoto} alt={name} className="student__photo" />
      <div className="student__info">
        <p className="student__info-name">{name}</p>
        <p className="student__info-username">{username}</p>
        <p className="student__info-dob">
          <span>Birthday:</span> {birthday}
        </p>
      </div>
    </div>
  );
}
