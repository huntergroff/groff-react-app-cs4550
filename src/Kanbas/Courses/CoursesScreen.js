import { Link } from "react-router-dom"

function CoursesScreen({ courses }) {
    console.log(courses);
    return (
        <div className="mt-3 me-3 col">
            <h1>Courses</h1>
            <hr />
            <div className="list-group" style={{maxWidth: "600px"}}>
            {courses.map((course) => (
                <Link key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item">
                    {course.name}
                </Link>
            ))}
            </div>
        </div>
    )
}

export default CoursesScreen