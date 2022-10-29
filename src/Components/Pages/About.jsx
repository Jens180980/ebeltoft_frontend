import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerialMarine from "../../Assets/aerial_marine.jpg";

const StyledAbout = styled.section``;

export const About = () => {
  return (
    <StyledAbout>
      <Hero imgPath={aerialMarine} headerTxt="Om Ebeltoft Havnefront" />
    </StyledAbout>
  );
};
