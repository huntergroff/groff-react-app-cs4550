import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiSolidCalendar } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import "./kanbas-navigation.css";

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
            icon: <BiUserCircle size={40}/>
        },
        {
            title: "Calendar",
            icon: <BiSolidCalendar size={40}/>
        },
    ]
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.title}`}
          className={`${pathname.includes(link.title) && "active"}`}
        >
          <div class="kanbas-navigation-box">
            {link.icon}
            <p>{link.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
