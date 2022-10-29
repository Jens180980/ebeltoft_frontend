import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const StyledSlider = styled.div`
  height: 40vh;
  overflow: hidden;

  img {
    height: 40vh;
  }
`;

export const Slider = () => {
  const [Slides, setSlides] = useState();
  const [ImgList, setImgList] = useState();

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(
        `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/image-slider`
      );
      setSlides(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getImg = async () => {
      const result = await axios.get(
        `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/media`
      );
      setImgList(result.data);
    };
    getImg();
  }, []);

  return (
    <StyledSlider>
      <Carousel
        className="inner-slider"
        centerMode
        centerSlidePercentage="30"
        dynamicHeight={false}
        showThumbs={false}
      >
        {Slides &&
          Slides.map((item, index) => {
            let imgPath;
            ImgList &&
              ImgList.map((img) => {
                return item.featured_media === img.id
                  ? (imgPath = img.media_details.sizes.large.source_url)
                  : null;
              });
            return (
              <div key={index}>
                <img src={imgPath} alt="slider-image"></img>
              </div>
            );
          })}
      </Carousel>
    </StyledSlider>
  );
};
