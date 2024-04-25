// /src/Components/student/StudentDetails.jsx
import { useState } from "react";
import { getStudentDetails } from "../../helperFunctions";
import StudentDetailsItem from "./StudentDetailsItem";
import "./studentDetails.scss";

export default function StudentDetails({ student }) {
  const [notes, setNotes] = useState(student.notes);
  console.log(notes);

  const { codewars, certifications, scores } = getStudentDetails(student);
  console.log(certifications);
  return (
    <div className="student-details">
      <StudentDetailsItem title={"Codewars"} data={codewars} />
      <StudentDetailsItem title={"Scores"} data={scores} />
      <StudentDetailsItem title={"Certifications"} data={certifications} />
    </div>
  );
}
