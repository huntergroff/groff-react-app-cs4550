import { Route, Routes } from "react-router";
import Assignment3 from "./a3";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Assignment4 from "./a4";
import { Provider } from "react-redux";
import store from "./store";

function Labs() {
    return(
        <Provider store={store}>
       <div>
        <Nav />
        <Link to="a3">A3</Link>
        <Link to="a4">A4</Link>
        <Routes>
            <Route path="a3/*" element={<Assignment3 />} />
            <Route path="a4/*" element={<Assignment4 />} />
        </Routes>
       </div>
       </Provider>
    );
 }
 export default Labs;