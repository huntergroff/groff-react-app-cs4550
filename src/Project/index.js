import Nav from "../Nav";
import Account from "./Users/account";
import Signin from "./Users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "./Users/table";
import UsersNav from "./Users/usersnav";
import Signup from "./Users/signup";
function Project() {
  return (
    <div>
      <Nav />
      <div className="row mt-3">
        <div className="col-2">
          <UsersNav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;