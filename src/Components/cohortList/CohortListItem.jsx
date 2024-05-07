/* eslint-disable react/prop-types */
// src/components/CohortList/CohortListItem.jsx

import "./styles/cohortListItem.scss";
export default function CohortListItem({ item, selectCohort }) {
  return (
    <section className="cohort-list__item" onClick={selectCohort}>
      {item}
    </section>
  );
}
