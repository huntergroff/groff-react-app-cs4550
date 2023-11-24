import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const UsersNav = () => {
    const pathname = useLocation().pathname;
    return (
        <div>
            <ul className='list-group'>
                <Link className={`list-group-item ${pathname.includes("home") ? "active" : ""}`} to="./home">Home</Link>
                <Link className={`list-group-item ${pathname.includes("signin") ? "active" : ""}`} to="./signin">Sign in</Link>
                <Link className={`list-group-item ${pathname.includes("signup") ? "active" : ""}`} to="./signup">Sign Up</Link>
                <Link className={`list-group-item ${pathname.includes("admin/users") ? "active" : ""}`} to="./admin/users">Users</Link>
                <Link className={`list-group-item ${pathname.includes("account") ? "active" : ""}`} to="./account">Account</Link>
            </ul>
        </div>
    );
};

export default UsersNav;
