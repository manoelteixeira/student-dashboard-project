// src/components/CohortList/CohortList.jsx
/* eslint-disable react/prop-types */
import CohortListItem from "./CohortListItem";
import { getCohortListSorted } from "../../utils/cohortHelpers";
import "./styles/cohortList.scss";

export default function CohortList({ data, setSelectedCohort }) {
  const items = ["All Students", ...getCohortListSorted(data)];

  const selectCohort = (cohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <aside className="cohort-list">
      <h3 className="cohort-list__header"> Choose a Class by Start Date</h3>
      {items.map((item, idx) => (
        <CohortListItem
          key={`cohort-list-item-${idx}`}
          selectCohort={() => selectCohort(item)}
          item={item}
        />
      ))}
    </aside>
  );
}
