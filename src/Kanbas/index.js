import { Route, Routes, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import CoursesScreen from "./Courses/CoursesScreen";
import { Provider } from "react-redux";
import store from "./Store";
import axios from "axios";

function Kanbas() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course", 
    number: "New Number",
    startDate: "2023-01-10", 
    endDate: "2023-05-15",
    department: "New Department",
    credits: 4,
    description: "New Description",
  });

  const findAllCourses = async () => {
    console.log(URL);
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  
  const addNewCourse = async () => {
    console.log(course);
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };


  const updateCourse = async () => {
    console.log("hello)");
    console.log(course);
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };


  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} />} />
          <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
          <Route path="/Courses" element={<CoursesScreen courses={courses} />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
