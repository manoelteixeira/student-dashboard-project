import { useState } from "react";
import { getCohorotList, getStudentsByCohort } from "./helperFunctions";

import Header from "./Components/header/Header";
import CohortList from "./Components/cohortList/CohortList";
import StudentList from "./Components/studentList/StudentList";

// import data from "./data/data.json";
import "./app.scss";

export default function App() {
  const [selectedClass, setSelectedClass] = useState("All Students");
  return (
    <>
      <Header />
      <div className="main">
        <CohortList setSelectedClass={setSelectedClass} />
        <StudentList
          selectedClass={selectedClass}
          data={getStudentsByCohort(selectedClass)}
        />
      </div>
    </>
  );
}

// export default App;
