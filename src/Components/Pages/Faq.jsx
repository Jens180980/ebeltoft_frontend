import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_outside.jpg";

const StyledFaq = styled.section``;

export const Faq = () => {
  return (
    <StyledFaq>
      <Hero imgPath={house_model} headerTxt="FAQ" />
    </StyledFaq>
  );
};
