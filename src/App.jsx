import { useState } from "react";
import { getCohorotList, getStudentsByCohort } from "./helperFunctions";

import Header from "./Components/header/Header";
import CohortList from "./Components/cohortList/CohortList";
import StudentList from "./Components/studentList/StudentList";

import data from "./data/data.json";
import "./app.scss";

function App() {
  const [classList, setClassList] = useState([
    "All Students",
    ...getCohorotList(data),
  ]);
  const [selectedClass, setSelectedClass] = useState(classList[0]);
  return (
    <>
      <Header />
      <div className="main">
        <CohortList classList={classList} method={setSelectedClass} />
        <StudentList
          selectedClass={selectedClass}
          data={getStudentsByCohort(data, selectedClass)}
        />
      </div>
    </>
  );
}

export default App;
