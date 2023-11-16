import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
  Link,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import { FaBars } from "react-icons/fa";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./styles.css";
import Grades from "./Grades";
import CoursesScreen from "./CoursesScreen";
import axios from "axios";
import { useEffect, useState } from "react";

function Courses({ courses }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const courseIdPathPosition = path.indexOf(courseId);
  const URL = "http://localhost:4000/api/courses";

  let breadcrumbs = [];
  for (let i = courseIdPathPosition; i < path.length; i++) {
    const txt = path[i];
    const link = path.slice(0, i + 1).join("/");
    const className = `breadcrumb-item ${
      i != path.length - 1 && "text-danger"
    }`;
    breadcrumbs.push(
      <li className={className}>
        <Link to={link}>{txt}</Link>
      </li>
    );
  }

  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    console.log(response.data);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="col mt-3 me-4">
      {/* Breadcrumb */}
      <div className="wd-breadcrumb d-flex align-items-center">
        <FaBars className="me-4 text-danger" size={25} />
        <nav
          style={{ "--bs-breadcrumb-divider": "'>'" }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb m-0">{breadcrumbs}</ol>
        </nav>
      </div>
      <hr />

      {/* <h1>Course {course.name}</h1> */}
      <div className="row">
        <div className="col-auto">
          <CourseNavigation />
        </div>
        <div className="col">
          <h1 className="mb-3">{course.name}</h1>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home course={course} />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Grades" element={<Grades />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
