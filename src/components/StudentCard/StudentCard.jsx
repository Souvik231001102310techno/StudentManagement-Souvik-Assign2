import "./StudentCard.css";

function StudentCard({ student, index }) {
  return (
    <article
      className="student-card"
      style={{ "--delay": `${index * 0.1}s` }}
    >
      <div className="card-glow"></div>

      <div className="card-number">
        #{String(student.id).padStart(2, "0")}
      </div>

      <div className="card-arrow">↗</div>

      <div className="photo-wrapper">
        <div className="photo-ring"></div>

        <img
          src={student.photo}
          alt={student.name}
          //className="student-photo"
        />
      </div>

      <div className="student-info">
        <span className="student-label">
          STUDENT PROFILE
        </span>

        <h3>{student.name}</h3>

        <p className="roll">
          Roll No: <strong>{student.roll}</strong>
        </p>

        <div className="details">
          <div>
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div>
            <span>Semester</span>
            <strong>{student.semester}</strong>
          </div>
        </div>

        <div className="cgpa-area">
          <div>
            <span>CGPA</span>
            <strong>{student.cgpa.toFixed(2)}</strong>
          </div>

          <div className="cgpa-bar">
            <div
              style={{
                width: `${(student.cgpa / 10) * 100}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StudentCard;