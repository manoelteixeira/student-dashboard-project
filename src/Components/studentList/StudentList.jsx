// src/Components/studentList/StudentList.jsx
import { useState } from "react";
import { getStudentProfile } from "../../helperFunctions";

import Student from "../student/Student";

import "./studentList.scss";

export default function StudentList({ selectedClass, data, setStudents }) {
  const students = data.map((student, idx) => {
    return <Student key={idx} student={student} />;
  });

  return (
    <main className="student-list">
      <h2 className="student-list__title">{selectedClass}</h2>
      <p className="student-list__total">
        Total Students: <span>{data.length}</span>
      </p>
      {students}
    </main>
  );
}
