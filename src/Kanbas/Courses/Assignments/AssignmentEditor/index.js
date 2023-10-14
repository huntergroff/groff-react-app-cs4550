import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <h2 className="mb-3">Assignment {assignment._id}</h2>
            <label className="mb-1" for="title">Assignment Name</label>
            <input id="title"
                value={assignment.title}
                className="form-control mb-2" style={{ "max-width": "600px" }} />
            <label className="mb-1" for="date">Due Date</label>

            <input id="date" type="date" className="form-control mb-4" style={{ "max-width": "200px" }} value={assignment.due} />
            <hr />
            <div className="d-flex justify-content-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success ms-2">
                    Save
                </button>
            </div>
        </div>
    );
}


export default AssignmentEditor;