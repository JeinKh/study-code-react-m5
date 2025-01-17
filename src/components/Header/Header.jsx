import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <div>Routing</div>
      <nav>
        <ul>
          <li>
            <NavLink className={buildLinkClass} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
