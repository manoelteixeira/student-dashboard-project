// src/components/StudentList/StudentListPortfolio.jsx
/* eslint-disable react/prop-types */
import "./styles/studentListPortfolio.scss";

export default function StudentListPortfolio({ portifolio }) {
  const { codewars, scores, certifications } = portifolio;
  return (
    <section className="student-list__portfolio">
      <div className="student-list__codewars">
        <h3> Codewars</h3>
        <p>
          <span>Current Total:</span> {codewars.total}
        </p>
        <p>
          <span>Last Week:</span> {codewars.lastWeek}
        </p>
        <p>
          <span>Goal:</span> {codewars.goal}
        </p>
        <p>
          <span>Percentage Of Goal Achieved:</span> {codewars.percentage}
        </p>
      </div>
      <div className="student-list__scores">
        <h3> Scores</h3>
        <p>
          <span>Assignments:</span> {scores.assignments}
        </p>
        <p>
          <span>Projects: </span> {scores.projects}
        </p>
        <p>
          <span>Assessments: </span> {scores.assessments}
        </p>
      </div>
      <div className="student-list__certifications">
        <h3> Certifications</h3>
        <p>
          <span>Resume: </span> {certifications.resume}
        </p>
        <p>
          <span>Linkedin:</span> {certifications.linkedin}
        </p>
        <p>
          <span>Mock Interview:</span> {certifications.mockInterview}
        </p>
        <p>
          <span>Github: </span> {certifications.github}
        </p>
      </div>
    </section>
  );
}
