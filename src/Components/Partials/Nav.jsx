import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Menu right>
        <NavLink id="home" className="menu-item" to="/">
          Forside
        </NavLink>
      </Menu>
    </nav>
  );
};
