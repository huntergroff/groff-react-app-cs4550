import React from "react";
import { Link, useParams } from "react-router-dom";
import { LuGripVertical } from "react-icons/lu";
import { FaCircleCheck, FaEllipsisVertical, FaPenToSquare, FaPlus } from "react-icons/fa6";
import db from "../../Database";
import "./styles.css"
import { FaEllipsisV } from "react-icons/fa";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div className="d-flex justify-content-between">
            <input className="form-control" style={{"max-width":"300px", "max-height":"40px"}} placeholder="Search for Assignment"></input>
            <div className="wd-module-top-buttons">
                <button className="btn btn-outline-secondary ms-2">+ Group</button>
                <button className="btn btn-danger ms-2">+ Assignment</button>
                <button className="btn btn-outline-secondary ms-2">
                    <FaEllipsisV />
                </button>
            </div>
            </div>

            <hr />

            <ul className="list-group wd-assignment-list">
                <li class="list-group-item list-group-item-secondary">
                    <div>
                        <LuGripVertical />
                        <p class="ps-1 m-0 d-inline" style={{ "font-weight": "600" }}>
                            Assignments</p>
                    </div>
                    <div class="wd-list-group-end-icons">
                        <div class="wd-assignments-percent-total-box d-inline">
                            40% of Total
                        </div>
                        <FaPlus className="ms-2" />
                        <FaEllipsisVertical className="ms-2" />
                    </div>
                </li>
                {courseAssignments.map((assignment) => (
                    <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        <li className="list-group-item wd-assignment-border">
                            <div className="d-flex align-items-center">
                                <LuGripVertical />
                                <FaPenToSquare className="text-success ms-3 me-2" />
                                <div>
                                    <p className="ps-1 m-0 wd-assignment-title">{assignment.title}</p>
                                    <p className="ps-1 m-0 wd-assignment-subtext">Multiple Modules | <b>Due</b> {assignment.due}</p>
                                </div>
                            </div>
                            <div className="wd-list-group-end-icons">
                                <FaCircleCheck className="text-success" />
                                <FaEllipsisVertical className="ms-4" />
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
export default Assignments;