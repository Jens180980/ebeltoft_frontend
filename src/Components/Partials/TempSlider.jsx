import styled from "styled-components";

import aerialMarine from "../../Assets/aerial_marine.jpg";
import modelInside from "../../Assets/model_inside.jpg";
import birdView from "../../Assets/birdview.jpg";
import modelOutside from "../../Assets/model_outside.jpg";
import drawing from "../../Assets/Situationsplan_square.png";
import modelOutsideVertical from "../../Assets/model_outside_vertical.jpg";

const StyledSlider = styled.section`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1rem;

  img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
  }
`;

export const TempSlider = () => {
  return (
    <StyledSlider>
      <img id="vertical" src={modelOutsideVertical} alt="slider" />
      <img src={modelInside} alt="slider" />
      <img src={modelOutside} alt="slider" />
      <img src={drawing} alt="slider" />
      <img src={aerialMarine} alt="slider" />
      <img src={birdView} alt="slider" />
    </StyledSlider>
  );
};
