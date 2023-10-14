import { Route, Routes, Navigate } from "react-router-dom";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="Dashboard" />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:courseId/*" element={<Courses />} />
        <Route path="/Courses" element={<Navigate to="RS101"/>}/>
      </Routes>
    </div>
  );
}
export default Kanbas;
