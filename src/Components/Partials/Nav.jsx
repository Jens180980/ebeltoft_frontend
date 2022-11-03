import { useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MenuContent } from "../Store/MenuCtx";

const StyledNav = styled.nav`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    right: 55px;
    top: 27px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: ${(props) => props.theme.colors.white};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: rgb(230, 229, 229);
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    left: 0 !important;

    height: 80px !important;
    width: 80px !important;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    left: -40px !important;
    height: 28px !important;
    background: ${(props) => props.theme.colors.white};
  }

  /*
    Sidebar wrapper styles
    Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
    */
  .bm-menu-wrap {
    position: fixed;
    top: 0;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #bbccd9;
    padding: 2.5em 1em 0;
    font-size: ${(props) => props.theme.fontSize.navItems};
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #fcfcfc;
    padding: 0.8em 0;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: ${(props) => props.theme.colors.white};
    padding-bottom: 0.4rem;
    margin-bottom: 0.4rem;
    font-size: ${(props) => props.theme.fontSize.navItems};
    text-decoration: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.white};
  }

  /* Styling of overlay */
  .bm-overlay {
    opacity: 0 !important;
  }
`;

export const Nav = () => {
  const ctx = useContext(MenuContent);

  return (
    <StyledNav>
      <Menu right isOpen={ctx.isMenuOpen}>
        <NavLink
          id="see_homes"
          className="menu-item"
          to="/se-boliger"
          onClick={ctx.toogleMenu}
        >
          Se Boliger
        </NavLink>
        <NavLink
          id="about"
          className="menu-item"
          to="/om-ebeltoft-havnefront"
          onClick={ctx.toogleMenu}
        >
          Om Ebeltoft Havnefront
        </NavLink>
        <NavLink
          id="about-city"
          className="menu-item"
          to="/om-ebeltoft-by"
          onClick={ctx.toogleMenu}
        >
          Om Ebeltoft By
        </NavLink>

        <NavLink
          id="faq"
          className="menu-item"
          to="/faq"
          onClick={ctx.toogleMenu}
        >
          FAQ
        </NavLink>
        <NavLink
          id="contacts"
          className="menu-item"
          to="/kontakter"
          onClick={ctx.toogleMenu}
        >
          Kontakter
        </NavLink>
        <NavLink
          id="documents"
          className="menu-item"
          to="/dokumenter"
          onClick={ctx.toogleMenu}
        >
          Dokumenter
        </NavLink>
        <NavLink
          id="common-areas"
          className="menu-item"
          to="/faellesarealer"
          onClick={ctx.toogleMenu}
        >
          Fællesarealer
        </NavLink>
      </Menu>
    </StyledNav>
  );
};
