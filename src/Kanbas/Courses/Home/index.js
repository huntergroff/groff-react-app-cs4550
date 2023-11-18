import ModuleList from "../Modules/ModuleList";
import { FaArrowRight, FaBan, FaBell, FaBullhorn, FaCalendar, FaChartBar, FaDotCircle, FaRegCheckCircle } from "react-icons/fa"
import { FaX } from "react-icons/fa6";

function CourseStatusButton(props) {
    return (
    <button className="mb-1 btn btn-light btn-outline-secondary">
        {props.icon}
        {props.text}
    </button>
    )
}

function Home({course}) {
    return (
        <div className="row">
            <div className="col">
                <ModuleList />
            </div>
            <div className="float-end me-4 d-none d-xl-inline" style={{ "width": "300px" }}>
                <h5 className="m-0 mb-2">Course Status</h5>
                <div className="d-flex mb-2">
                    <button className="btn btn-light btn-outline-secondary">
                        <FaBan  className="me-1 mb-1"/>
                        Unpublish
                    </button>
                    <button className="btn btn-success ms-2" disabled>
                        <FaRegCheckCircle className="me-1 mb-1"/>
                        Published
                    </button>
                </div>
                <div>
                    <CourseStatusButton icon={<FaArrowRight className="mb-1 me-1"/>} text="Import Existing Content" />
                    <CourseStatusButton icon={<FaArrowRight className="mb-1 me-1"/>} text="Import From Commons" />
                    <CourseStatusButton icon={<FaDotCircle className="mb-1 me-1"/>} text="Choose Home Page" />
                    <CourseStatusButton icon={<FaChartBar className="mb-1 me-1"/>} text="View Course Stream" />
                    <CourseStatusButton icon={<FaBullhorn className="mb-1 me-1"/>} text="New Announcement" />
                    <CourseStatusButton icon={<FaChartBar className="mb-1 me-1"/>} text="New Analytics" />
                    <CourseStatusButton icon={<FaBell className="mb-1 me-1"/>} text="View Course Notifications" />
                </div>
                <h5 className="mt-3">To Do</h5>
                <hr />
                <div className="d-flex justify-content-between align-items-start">
                    <div>
                        <p className="m-0 text-danger">Grade A1 - ENV + HTML</p>
                        <p className="m-0 text-secondary">100 points - Sep 18 at 11:59 PM</p>
                    </div>
                    <button className="btn">
                        <FaX />
                    </button>
                </div>
                <h5 className="mt-3">Coming Up</h5>
                <hr />
                <div className="d-flex justify-content-start align-items-start">
                    <FaCalendar className="me-3 mt-1"/>
                    <div>
                        <p className="m-0 text-danger">Lecture</p>
                        <p className="m-0 text-secondary">Sep 14 at 1:35 PM</p>
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-start">
                    <FaCalendar className="me-3 mt-1"/>
                    <div>
                        <p className="m-0 text-danger">Lecture</p>
                        <p className="m-0 text-secondary">Sep 17 at 1:35 PM</p>
                    </div>
                </div>
                <div className="d-flex justify-content-start align-items-start">
                    <FaCalendar className="me-3 mt-1"/>
                    <div>
                        <p className="m-0 text-danger">Lecture</p>
                        <p className="m-0 text-secondary">Sep 21 at 1:35 PM</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;