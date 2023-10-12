import { Route, Routes } from "react-router";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";

function Labs() {
    return(
       <div>
        <Nav />
        <Link to="a3">A3</Link>
        <Routes>
            <Route path="a3/*" element={<Assignment3 />} />
        </Routes>
       </div>
    );
 }
 export default Labs;