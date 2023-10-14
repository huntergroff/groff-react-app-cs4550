import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiSolidCalendar, BiSolidBook } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import "./kanbas-navigation.css";
import Northeastern from "./northeastern.png";

function KanbasNavigation() {
    const links = [
        {
            title: "Account",
            icon: <BiUserCircle size={40}/>
        },
        {
            title: "Dashboard",
            icon: <AiOutlineDashboard size={40}/>
        },
        {
            title: "Courses",
            icon: <BiSolidBook size={40}/>
        },
        {
            title: "Calendar",
            icon: <BiSolidCalendar size={40}/>
        },
    ]
  const { pathname } = useLocation();
  return (
    <div className="me-3 list-group wd-kanbas-navigation">
      <Link to="/Kanbas/" className="kanbas-navigation-box">
        <img src={Northeastern} style={{"width":"75px"}}></img>
      </Link>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.title}`}
          className={`${pathname.includes(link.title) && "active"}`}
        >
          <div className="kanbas-navigation-box">
            {link.icon}
            <p>{link.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
