import { useState } from "react";
import {
  getCohorotList,
  getStudentsByCohort,
  updateStudent,
} from "./helperFunctions";

import Header from "./Components/header/Header";
import CohortList from "./Components/cohortList/CohortList";
import StudentList from "./Components/studentList/StudentList";

import data from "./data/data.json";
import "./app.scss";

export default function App() {
  const [selectedClass, setSelectedClass] = useState("All Students");
  const [students, setStudents] = useState(data);

  return (
    <>
      <Header />
      <div className="main">
        <CohortList
          setSelectedClass={setSelectedClass}
          classList={["All Students", ...getCohorotList(data)]}
        />
        <StudentList
          selectedClass={selectedClass}
          data={getStudentsByCohort(data, selectedClass)}
          setStudents={() => {
            setStudents;
          }}
        />
      </div>
    </>
  );
}

// export default App;
