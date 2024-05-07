// src/components/StudentList/StudentListItem.jsx
/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  getStudentInfo,
  getStudentPortifolio,
} from "../../utils/studentHelpers";
import StudentListInfo from "./StudentListInfo";
import StudentListPortfolio from "./StudentListPortfolio";
import StudentListNotes from "./StudentListNotes";

export default function StudentListItem({
  student,
  setCurrentStudent,
  updateStudent,
}) {
  const [showMore, setShowMore] = useState(false);
  const [notes, setNotes] = useState([...student.notes]);
  const info = getStudentInfo(student);
  const portifolio = getStudentPortifolio(student);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const updateNotes = () => {
    const currentStudent = { ...student };
    currentStudent.notes = [...notes];
    setCurrentStudent({ ...currentStudent });
    updateStudent();
  };

  return (
    <>
      <StudentListInfo
        info={info}
        showMore={showMore}
        toggleShowMore={toggleShowMore}
      />
      {showMore && (
        <>
          <StudentListPortfolio portifolio={portifolio} />
          <StudentListNotes
            notes={notes}
            setNotes={setNotes}
            updateNotes={updateNotes}
          />
        </>
      )}
    </>
  );
}
