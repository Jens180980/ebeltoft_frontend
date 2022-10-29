import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_inside.jpg";

const StyledContacts = styled.section``;

export const Contacts = () => {
  return (
    <StyledContacts>
      <Hero imgPath={house_model} headerTxt="Kontakter" />
    </StyledContacts>
  );
};
