import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import fregatJylland from "../../Assets/fregatten_Jylland.jpg";

const StyledAboutCity = styled.section``;

export const AboutCity = () => {
  return (
    <StyledAboutCity>
      <Hero imgPath={fregatJylland} headerTxt="Om Ebeltoft By" />
    </StyledAboutCity>
  );
};
