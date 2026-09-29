import { useState } from "react";
import TopBar from "./components/TopBar/TopBar";
import StudentList from "./components/StudentList/StudentList";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [students] = useState([
    {
      id: 1,
      name: "Souvik Roy",
      roll: "231001102310",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 9.12,
      photo: "/students/student1.jpg"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      roll: "231001102311",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 8.76,
      photo: "/students/student2.jpg"
    },
    {
      id: 3,
      name: "Ananya Das",
      roll: "231001102312",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 9.45,
      photo: "/students/student3.jpg"
    },
    {
      id: 4,
      name: "Arjun Singh",
      roll: "231001102313",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 8.35,
      photo: "/students/student4.jpg"
    },
    {
      id: 5,
      name: "Priya Roy",
      roll: "231001102314",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 9.28,
      photo: "/students/student1.jpg"
    },
    {
      id: 6,
      name: "Amit Kumar",
      roll: "231001102315",
      department: "Computer Applications",
      semester: "8th Semester",
      cgpa: 7.95,
      photo: "/students/student2.jpg"
    }
  ]);

  return (
    <div className="app" id="top">
      <div className="background-grid"></div>

      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>
      <div className="background-orb orb-three"></div>

      <TopBar />

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <span className="hero-badge">
              STUDENT INFORMATION PORTAL
            </span>

            <h1>
              Student
              <span> Directory</span>
            </h1>

            <p>
              Explore student profiles, academic information,
              departments, semesters and CGPA in one beautiful
              interactive portal.
            </p>

            <div className="hero-stats">
              <div>
                <strong>{students.length}</strong>
                <span>Students</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Departments</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Semesters</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-ring ring-one"></div>
            <div className="visual-ring ring-two"></div>

            <div className="student-icon">
              <span>🎓</span>
            </div>
          </div>
        </section>

        <StudentList students={students} />
      </main>

      <Footer />
    </div>
  );
}

export default App;