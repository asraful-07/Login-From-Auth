import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("User sign out successful");
      })
      .catch((error) => {
        console.error("ERROR", error.message);
      });
  };

  const navigationList = (
    <>
      <li>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="active">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" activeClassName="active">
          Register
        </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li>
            <NavLink to="/orders" activeClassName="active">
              Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className=" w-full bg-blur">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
            >
              {navigationList}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Login Form</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navigationList}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <span>{user?.email}</span>
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
