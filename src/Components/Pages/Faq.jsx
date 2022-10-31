import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_outside.jpg";
import { Accordion } from "../Partials/Accordion";

const StyledFaq = styled.section``;

export const Faq = () => {
  return (
    <StyledFaq>
      <Hero imgPath={house_model} headerTxt="FAQ" />
      <div className="top">
        <p>
          Vi har samlet de mest stillede spørgsmål, så det er nemt for dig at få
          svar på det, du ønsker. Mangler du svar på noget, er du naturligvis
          altid velkommen til at kontakte de tilknyttede mæglere. Burg venligst
          vores kontaktformular nedenfor.
        </p>
      </div>
      <Accordion headerTxt="Er der elevator?" contentTxt="Ja, selvfølgelig" />
    </StyledFaq>
  );
};
