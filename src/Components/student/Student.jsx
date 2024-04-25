// src/Components/students/Student.jsx
import { useState } from "react";
import { getStudentProfile } from "../../helperFunctions";
import StudentDetails from "./StudentDetails";
import "./student.scss";

export default function Student({ student }) {
  const [showMore, setShowMore] = useState(false);
  const [detailsContent, setDetailContent] = useState("");
  const { name, username, birthday, profilePhoto, onTrack } =
    getStudentProfile(student);

  const onTrackDiv = () => {
    if (!onTrack.status) {
      return (
        <div className="student__ontrack" style={{ color: "red" }}>
          {onTrack.message}
        </div>
      );
    } else {
      return <div className="student__ontrack">{onTrack.message}</div>;
    }
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="student">
      <img src={profilePhoto} alt={name} className="student__photo" />
      <div className="student__info">
        <p className="student__info-name">{name}</p>
        <p className="student__info-username">{username}</p>
        <p className="student__info-dob">
          <span>Birthday:</span> {birthday}
        </p>
        <a href="#" className="student__info-more" onClick={handleShowMore}>
          {showMore == false ? "Show More..." : "Show Less..."}
        </a>
      </div>
      {onTrackDiv()}
      {showMore && <StudentDetails student={student} />}
    </div>
  );
}
