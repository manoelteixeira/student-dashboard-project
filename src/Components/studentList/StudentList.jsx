/* eslint-disable react/prop-types */
// src/components/StudentList/StudentList.jsx
import StudentListItem from "./StudentListItem";
import { getStudentsByCohort } from "../../utils/studentHelpers";
import "./styles/studentList.scss";
import { useState } from "react";

export default function StudentList({ data, setStudents, selectedCohort }) {
  const students = getStudentsByCohort(data, selectedCohort);
  const [currentStutent, setCurrentStudent] = useState();

  const updateStudent = () => {
    const updatedData = data.map((student) => {
      if (student.id == currentStutent.id) {
        return { ...currentStutent };
      } else {
        return { ...student };
      }
    });
    setStudents([...updatedData]);
  };

  return (
    <main className="student-list">
      <h3> {selectedCohort}</h3>
      <p>
        Total Students: <span>{students.length}</span>
      </p>
      <ul className="student-list__item">
        {students.map((student) => {
          return (
            <li key={student.id}>
              <StudentListItem
                student={student}
                setCurrentStudent={setCurrentStudent}
                updateStudent={updateStudent}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
