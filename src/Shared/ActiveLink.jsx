import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-white bg-green-600 text-lg font-bold"
          : "text-green-600 text-lg font-bold"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
