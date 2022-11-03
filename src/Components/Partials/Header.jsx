import logo_img from "../../Assets/logo_hvid.png";
import { Nav } from "../Partials/Nav";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 100;
  display: flex;
  align-items: center;

  img {
    width: 20%;
  }

  .headerAtTop {
    width: 100%;
    padding: 1.5rem 3rem;
    background-color: transparent;
    transition: all 300ms linear;
  }

  .headerNotAtTop {
    width: 100%;
    padding: 1.5rem 3rem;
    background-color: ${(props) => props.theme.colors.darkblue};
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
    transition: all 300ms linear;
  }
`;

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      toogleClassName(scrollPosition);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const toogleClassName = (scrollPosition) => {
    scrollPosition > 100
      ? (document.getElementById("headerWrapper").className = "headerNotAtTop")
      : (document.getElementById("headerWrapper").className = "headerAtTop");
  };

  return (
    <StyledHeader>
      <div id="headerWrapper" className="headerAtTop">
        <NavLink to="/">
          <img src={logo_img} alt="logo" />
        </NavLink>
        <Nav />
      </div>
    </StyledHeader>
  );
};
