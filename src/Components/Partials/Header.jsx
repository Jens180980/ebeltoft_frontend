import logo_img from "../../Assets/logo.png";
import { Nav } from "../Partials/Nav";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor || "#80a7bf"};
  padding: 1.5rem 3rem;
`;

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <StyledHeader bgColor={scrollPosition > 100 ? "#80a7bf" : "transparent"}>
      <NavLink to="/">
        <img src={logo_img} alt="logo" />
      </NavLink>
      <Nav />
    </StyledHeader>
  );
};
