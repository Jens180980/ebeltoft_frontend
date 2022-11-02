import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerial_marine from "../../Assets/aerial_marine.jpg";
import model from "../../Assets/Situationsplan_square.png";
import wave from "../../Assets/wave-vertical.png";
import { ListHomes } from "../Partials/ListHomes";
import { NavLink } from "react-router-dom";

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
      position: relative;
      width: 50vw;
      margin: 2rem auto;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
      }
      .dots {
        position: absolute;

        height: 1em;
        width: 1em;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.green};
        z-index: 10;
        cursor: pointer;
        transition: all 300ms linear;
      }
      .dots:hover {
        scale: 1.2;
      }

      #first-a {
        top: 11.5%;
        left: 69%;
      }

      #second-a {
        top: 28.8%;
        left: 59.8%;
      }

      #third-a {
        top: 45.5%;
        left: 54%;
      }

      #first-b {
        top: 17.2%;
        left: 78.8%;
      }

      #second-b {
        top: 34.3%;
        left: 69.5%;
      }

      #third-b {
        top: 49.6%;
        left: 64.4%;
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
          <NavLink to="/se-boliger/32">
            <span id="first-a" className="dots"></span>
            <span id="second-a" className="dots"></span>
            <span id="third-a" className="dots"></span>
          </NavLink>
          <NavLink to="se-boliger/33">
            <span id="first-b" className="dots"></span>
            <span id="second-b" className="dots"></span>
            <span id="third-b" className="dots"></span>
          </NavLink>
        </div>
      </section>
      <ListHomes />
    </StyledSeeHomes>
  );
};
