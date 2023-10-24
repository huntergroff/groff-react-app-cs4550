import { React } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Dashboard({ courses, course, setCourse, addNewCourse, updateCourse, deleteCourse }) {
  return (
    <div className="col mt-3 wd-dashboard me-3">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <hr />

      <div style={{ maxWidth: "600px" }}>
        <h5>Course</h5>
        <div>
          <input value={course.name} className="form-control mb-2" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <input value={course.number} className="form-control mb-2" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
          <div className="d-flex">
          <input value={course.startDate} style={{ maxWidth: "600px" }} className="form-control mb-2" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
          <input value={course.endDate} style={{ maxWidth: "600px" }} className="form-control mb-2 ms-2" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
          </div>
          <button className="btn btn-success" onClick={addNewCourse} >
            Add Course
          </button>

          <button className="btn btn-primary ms-2" onClick={updateCourse} >
            Update Course
          </button>
        </div>
        <hr />


        <div className="list-group">
          {courses.map((course) => (
            <Link key={course._id}
              to={`/Kanbas/Courses/${course._id}`}
              className="list-group-item d-flex justify-content-between align-items-center">
              {course.name}
              <div>
                <button className="btn btn-danger"
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                  Delete
                </button>
                <button className="btn btn-warning ms-2"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  Edit
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
