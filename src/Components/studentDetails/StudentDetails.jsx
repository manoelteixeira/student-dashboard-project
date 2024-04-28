// /src/Components/student/StudentDetails.jsx
import { useState } from "react";
import { getStudentDetails } from "../../helperFunctions";
import StudentDetailsItem from "../studentDetailsItem/StudentDetailsItem";
// import StudentDetailsNote from "../studentDetailsNote/StudentDetailsNote";
import "./studentDetails.scss";

export default function StudentDetails({ student }) {
  const { codewars, certifications, scores } = getStudentDetails(student);

  return (
    <div className="student-details">
      <StudentDetailsItem title={"Codewars"} data={codewars} />
      <StudentDetailsItem title={"Scores"} data={scores} />
      <StudentDetailsItem title={"Certifications"} data={certifications} />
    </div>
  );
}
