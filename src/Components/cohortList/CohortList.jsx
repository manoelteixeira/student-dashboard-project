// src/Components/cohortList/CohortList.jsx
import { useState } from "react";
import { getCohorotList } from "../../helperFunctions";
import "./cohortList.scss";

export default function CohortList({ setSelectedClass }) {
  const [classList, setClassList] = useState([
    "All Students",
    ...getCohorotList(),
  ]);
  const selectCohort = (cohort) => {
    setSelectedClass(cohort);
  };

  const cohortList = classList.map((cohort, idx) => {
    return (
      <div
        key={idx}
        className="cohort-list__item"
        onClick={() => {
          selectCohort(cohort);
        }}
      >
        {cohort}
      </div>
    );
  });

  return (
    <aside className="cohort-list">
      <h2 className="cohort-list__title">Choose a Class by Start Date</h2>
      {cohortList}
    </aside>
  );
}
