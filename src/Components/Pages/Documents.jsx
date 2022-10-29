import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_outside.jpg";

const StyledDocuments = styled.section``;

export const Documents = () => {
  return (
    <StyledDocuments>
      <Hero imgPath={house_model} headerTxt="Dokumenter, m. fl." />
    </StyledDocuments>
  );
};
