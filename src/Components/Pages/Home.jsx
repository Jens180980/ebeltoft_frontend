import { Hero } from "../Partials/Hero";
import styled from "styled-components";
import { Slider } from "../Partials/Slider";

import wave from "../../Assets/Waves1.png";
import { Button } from "../Partials/Button";

const StyledSubHeader = styled.section`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  h2 {
    font-size: 3rem;
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
`;

export const Home = () => {
  return (
    <section>
      <Hero />
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
            <Button>Se boliger</Button>
          </div>
        </div>
      </StyledSlider>
    </section>
  );
};
