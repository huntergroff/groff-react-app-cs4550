import { Link } from "react-router-dom";
import db from "../Database";
import "./styles.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col mt-3 wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />

      <div className="d-flex flex-row flex-wrap wd-card-grid">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
          >
            <div className="card" style={{ width: 260 }}>
            <rect style={{"backgroundColor": `${course.color}`}}></rect>
            <div className="card-body">
              <h5 className="card-title">{course.name}</h5>
              <p className="card-text">Fall 2023, Section 1</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
