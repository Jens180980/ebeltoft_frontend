import { Hero } from "../Partials/Hero";
import styled from "styled-components";
import { Slider } from "../Partials/Slider";
import { useNavigate } from "react-router-dom";

import wave from "../../Assets/Waves1.png";
import heroFront from "../../Assets/hero_front.jpg";

import { InfoBanner } from "../Partials/InfoBanner";
import { HorizontalScroll } from "../Partials/HorizontalScroll";
import { BottomHome } from "../Partials/BottomHome";

const StyledSubHeader = styled.section`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    width: 35vw;
    text-align: center;
  }
`;
const StyledSlider = styled.div`
  background-image: url(${wave});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 100vw;
  height: 90vh;

  .inner-wrap-slider {
    width: 80vw;
    margin: 0 auto;

    .text-wrap {
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      align-items: end;

      p {
        width: 70%;
      }
    }
  }
  button {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.green};
    border: 1px solid ${(props) => props.theme.colors.green};
    padding: 1em 3em;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.button};
    transition: all 300ms linear;
  
    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.white};
    }

  }
  
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const navigateSeeHomes = () => {
    navigate("/se-boliger", { replace: true });
  };
  return (
    <section>
      <Hero
        imgPath={heroFront}
        headerTxt="Ebeltoft Havnefront"
        subHeaderTxt="Attraktive boliger tæt på vandet og naturen"
      />
      <StyledSubHeader>
        <h2>Nye attraktive boliger med udsigt til vandet</h2>
      </StyledSubHeader>
      <StyledSlider>
        <div className="inner-wrap-slider">
          <Slider />
          <div className="text-wrap">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae, ab dignissimos necessitatibus sit provident porro
              consequuntur dicta et, ratione amet voluptatibus? Est deleniti,
              voluptatibus beatae quam quas, laboriosam aperiam nulla deserunt
              dicta natus eos. Repellat laboriosam reiciendis aut dicta quas
              aliquid rem harum neque at aperiam temporibus fugit dolor.
            </p>
            <button onClick={navigateSeeHomes}>Se boliger</button>
          </div>
        </div>
      </StyledSlider>
      <InfoBanner />
      <HorizontalScroll />
      <BottomHome />
    </section>
  );
};
