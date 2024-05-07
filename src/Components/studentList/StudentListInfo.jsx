// src/components/StudentList/StudentListInfo.jsx
/* eslint-disable react/prop-types */

import "./styles/studentListInfo.scss";
// import img from "../../assets/imgs/dashboardImg.png";

export default function StudentListInfo({ info, showMore, toggleShowMore }) {
  const { fullName, email, dob, isOnTrack, photo } = info;
  const onTrack = () => {
    if (isOnTrack) {
      return <p> On Track To Graduate</p>;
    } else {
      return <p style={{ color: "red" }}> Off Track To Graduate</p>;
    }
  };

  return (
    <section className="student-list__info">
      <div className="student-list__img">
        <img src={photo} alt={fullName} />
      </div>
      <div className="student-list__details">
        <h3>{fullName}</h3>
        <p>{email}</p>
        <p>
          <span>Birthday:</span> {dob}
        </p>
        <button onClick={toggleShowMore}>
          Show {showMore ? "More" : "Less"}...
        </button>
      </div>
      <div className="student-list__ontrack">{onTrack()}</div>
    </section>
  );
}
