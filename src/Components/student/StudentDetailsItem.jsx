// src/Components/student/StudentDetailsItem.jsx
import "./studentDetailsItem.scss";

export default function StudentDetailsItem({ title, data }) {
  return (
    <div className="student-details-item">
      <h2 className="student-details-item__title">{title}:</h2>
      {data.map((item, idx) => {
        return (
          <p className="student-details-item__field" key={`${title}-${idx}`}>
            <span>{item.label}:</span> {item.value}
          </p>
        );
      })}
    </div>
  );
}
