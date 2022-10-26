import styled from "styled-components";
import aerial from "../../Assets/aerial_marine.jpg";
import logo from "../../Assets/logo_long.png";
import { useState, useEffect } from "react";

const StyledHorizontalScroll = styled.section`
  margin: 4rem 0 0 10%;
  position: relative;

  .img-wrap {
    img {
      width: 50%;
      display: inline-block;
    }
  }
  .logo-wrap {
    position: absolute;
    z-index: -10;
    top: 40%;
    right: -45%;
  `;

export const HorizontalScroll = () => {
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

  console.log(scrollPosition);
  return (
    <StyledHorizontalScroll>
      <div className="img-wrap">
        <img src={aerial} />
      </div>
      <div className="logo-wrap">
        <img src={logo} />
      </div>
    </StyledHorizontalScroll>
  );
};
