import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "../../Assets/scss/burger.css";

export const Nav = () => {
  return (
    <nav>
      <Menu right>
        <NavLink id="see_homes" className="menu-item" to="/se-boliger">
          Se Boliger
        </NavLink>
        <NavLink id="about" className="menu-item" to="/om-ebeltoft-havnefront">
          Om Ebeltoft Havnefront
        </NavLink>
        <NavLink id="about-city" className="menu-item" to="/om-ebeltoft-by">
          Om Ebeltoft By
        </NavLink>
        <NavLink id="gallery" className="menu-item" to="/galleri">
          Galleri
        </NavLink>
      </Menu>
    </nav>
  );
};
