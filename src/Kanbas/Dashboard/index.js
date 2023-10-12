import { Link } from "react-router-dom";
import db from "../Database";
import "./styles.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="col wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses (7)</h2>
      <hr />

      <div class="d-flex flex-row flex-wrap wd-card-grid">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
          >
            <div class="card" style={{ width: 260 }}>
            <rect style={{"backgroundColor": `${course.color}`}}></rect>
            <div class="card-body">
              <h5 class="card-title">{course.name}</h5>
              <p class="card-text">Fall 2023, Section 1</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
