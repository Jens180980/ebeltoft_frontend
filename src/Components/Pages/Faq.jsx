import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_outside.jpg";
import { Accordion } from "../Partials/Accordion";
import verticalWave from "../../Assets/wave-vertical.png";
import { useEffect, useState } from "react";
import axios from "axios";

const StyledFaq = styled.section`
  position: relative;
  margin-bottom: 8rem;

  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }

  img {
    position: absolute;
    top: 60vh;
    left: -10vw;
    z-index: -10;
  }
  .top {
    width: 70%;
    margin: 4rem auto;
  }
`;

export const Faq = () => {
  const [FAQS, setFAQS] = useState();

  useEffect(() => {
    const getFAQS = async () => {
      try {
        const result = await axios.get(
          `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/faq`
        );
        setFAQS(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getFAQS();
  }, []);
  console.log(FAQS);
  return (
    <StyledFaq>
      <img src={verticalWave} alt="pynt" />
      <Hero imgPath={house_model} headerTxt="FAQ" />
      <div className="top">
        <p>
          Vi har samlet de mest stillede spørgsmål, så det er nemt for dig at få
          svar på det, du ønsker. Mangler du svar på noget, er du naturligvis
          altid velkommen til at kontakte de tilknyttede mæglere. Brug venligst
          vores kontaktformular nedenfor.
        </p>
      </div>
      {FAQS &&
        FAQS.map((item, index) => {
          return (
            <Accordion
              key={item.id}
              headerTxt={item.acf.question}
              contentTxt={item.acf.answer}
            />
          );
        })}
    </StyledFaq>
  );
};
