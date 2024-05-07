// src/App.jsx

import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CohortList from "./components/CohortList/CohortList";
import StudentList from "./components/StudentList/StudentList";
import "./styles/app.scss";
import data from "./data/data.json";

export default function App() {
  const [students, setStudents] = useState([...data]);
  const [selectedCohort, setSelectedCohort] = useState("All Students");
  return (
    <div className="app">
      <Navbar />
      <CohortList data={students} setSelectedCohort={setSelectedCohort} />
      <StudentList
        data={students}
        setStudents={setStudents}
        selectedCohort={selectedCohort}
      />
    </div>
  );
}
