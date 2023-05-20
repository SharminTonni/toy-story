import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import Lottie from "lottie-react";
import car from "../assets/cartoy.json";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navigation = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then()
      .catch((err) => console.log(err));
  };
  const navItems = (
    <>
      <li>
        <ActiveLink to="/" className="">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="/shop">Shop</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/blog">Blog</ActiveLink>
      </li>
      {user ? (
        <>
          <li>
            <button
              onClick={handleLogOut}
              className="text-green-600 active:bg-green-600 text-lg font-bold"
            >
              LogOut
            </button>
          </li>
          <li>
            <ActiveLink to="/addtoy">Add Toy</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/mytoy">My Toys</ActiveLink>
          </li>
        </>
      ) : (
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-green-100 border-b-8 border-green-600 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <Lottie className="w-24 h-24" animationData={car} loop={true} />
          <Link
            to="/"
            className=" normal-case text-5xl font-serif text-green-600 font-extrabold"
          >
            <img
              className="w-48 h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toy_Story_logo.svg/1280px-Toy_Story_logo.svg.png"
              alt="website Logo"
            />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="lg:navbar-end">
        {user ? (
          <>
            <span className="tooltip" data-tip={user?.displayName}>
              <img
                className="w-16 h-16  rounded-full"
                src={user?.photoURL}
                alt="user photo"
              />
            </span>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navigation;
