import { useState } from "react";
import StudentCard from "../StudentCard/StudentCard";
import "./StudentList.css";

function StudentList({ students }) {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return a.id - b.id;
  });

  return (
    <section id="students" className="students-section">
      <div className="students-heading">
        <div>
          <span className="section-number">01</span>
          <p>STUDENT DIRECTORY</p>

          <h2>
            Our <span>Students</span>
          </h2>
        </div>

        <div className="sort-box">
          <label htmlFor="sort">Sort by CGPA</label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="high">Highest First</option>
            <option value="low">Lowest First</option>
          </select>
        </div>
      </div>

      <div className="student-count">
        Showing <strong>{sortedStudents.length}</strong> students
      </div>

      <div className="student-grid">
        {sortedStudents.map((student, index) => (
          <StudentCard
            key={student.id}
            student={student}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default StudentList;