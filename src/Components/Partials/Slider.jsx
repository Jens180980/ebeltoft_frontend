import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

import aerialMarine from "../../Assets/aerial_marine.jpg";
import heroFront from "../../Assets/hero_front.jpg";
import woodenBoat from "../../Assets/wooden_boat.jpg";

const imgArr = [aerialMarine, heroFront, woodenBoat];

const StyledSlider = styled.div`
  height: 40vh;
  overflow: hidden;

  img {
    height: 40vh;
  }
`;

export const Slider = () => {
  return (
    <StyledSlider>
      <Carousel
        className="inner-slider"
        centerMode
        centerSlidePercentage="30"
        dynamicHeight={false}
        showThumbs={false}
      >
        {imgArr.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} />
            </div>
          );
        })}
      </Carousel>
    </StyledSlider>
  );
};
