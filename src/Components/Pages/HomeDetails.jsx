// import react hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Hero } from "../Partials/Hero";
import styled from "styled-components";

const StyledHomeDetails = styled.section`
  .home-details {
    width: 80%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    gap: 8rem;

    .home-info {
      width: 50%;
    }
    .drawing-wrapper {
      img {
        width: 80%;
      }
    }
  }
`;

// HomeDetails function component
export const HomeDetails = () => {
  const { home_id } = useParams(0);
  const [HomeDetails, setHomeDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const result = await axios.get(
          `https://ebeltoft.dev-footprint.nu/ebeltoft_backend/wp-json/wp/v2/boliger/${home_id}`
        );
        setHomeDetails(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDetails();
  }, [home_id]);

  console.log(HomeDetails);

  return (
    <StyledHomeDetails className="component-wrapper">
      {HomeDetails ? (
        <>
          <Hero
            imgPath={
              HomeDetails ? HomeDetails.acf.featured_image.sizes.large : null
            }
            alt="inde i bolig"
            headerTxt={"Boligtype " + HomeDetails.acf.type}
          />
          <section className="home-details">
            <div className="home-info">
              <p>Pris: {HomeDetails.acf.pricerange}</p>
              <p>Kvadratmeter: {HomeDetails.acf.area}</p>
              <p>Antal værelser: {HomeDetails.acf.rooms}</p>
              <p>Beskrivelse:</p>
              <p>{HomeDetails.acf.description}</p>
            </div>
            <div className="drawing-wrapper">
              <img src={HomeDetails.acf.drawing.url} />
            </div>
          </section>
        </>
      ) : null}
    </StyledHomeDetails>
  );
};
