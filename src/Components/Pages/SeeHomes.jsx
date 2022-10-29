import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerial_marine from "../../Assets/aerial_marine.jpg";

const StyledSeeHomes = styled.section``;

export const SeeHomes = () => {
  return (
    <StyledSeeHomes>
      <Hero
        imgPath={aerial_marine}
        headerTxt="Se udvalget af vores boliger herunder"
      />
    </StyledSeeHomes>
  );
};
