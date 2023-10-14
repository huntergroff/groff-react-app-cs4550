import { Link, useParams, useLocation } from "react-router-dom";
import "./styles.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades", "People", "Discussions", "Announcements", "Files", "Syllabus"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group">
      <ul className="wd-course-navigation">
        {links.map((link, index) => (
          <li key={index} className={`${pathname.includes(link) && "active"}`}>
            <Link to={`/Kanbas/Courses/${courseId}/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default CourseNavigation;