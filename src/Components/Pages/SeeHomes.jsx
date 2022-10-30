import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerial_marine from "../../Assets/aerial_marine.jpg";
import model from "../../Assets/Situationsplan.jpg";
import wave from "../../Assets/wave-vertical.png";
import { ListHomes } from "../Partials/ListHomes";

const StyledSeeHomes = styled.section`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: -20vh 70vh;
  background-size: 25%;
  .top-section {
    .header-wrapper {
      width: 80vw;
      margin: 8rem auto 4rem auto;
      h2 {
        font-size: ${(props) => props.theme.fontSize.h2};
        font-weight: 400;
        margin: 2rem 0 2rem 8rem;
      }
    }

    .img-wrapper {
      width: 80vw;
      height: 80vh;
      margin: 2rem auto;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
      }
    }
  }
`;

export const SeeHomes = () => {
  return (
    <StyledSeeHomes>
      <Hero
        imgPath={aerial_marine}
        headerTxt="Se udvalget af vores boliger herunder"
      />
      <section className="top-section">
        <div className="header-wrapper">
          <h2>
            Boliger i Ebeltoft <br /> Havnefront
          </h2>
        </div>

        <div className="img-wrapper">
          <img src={model} alt="plantegning" />
        </div>
      </section>
      <ListHomes />
    </StyledSeeHomes>
  );
};
