// import react hooks
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Hero } from "../Partials/Hero";
import styled from "styled-components";
import { PrimaryBtn } from "../Partials/Buttons";

const StyledHomeDetails = styled.section`
  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: 700;
  }
  button {
    margin-top: 2rem;
  }
  .header {
    width: 80%;
    margin: 8rem auto;
    font-size: ${(props) => props.theme.fontSize.h2};
  }
  .home-details {
    width: 80%;
    margin: 4rem auto;
    display: flex;
    justify-content: space-between;
    gap: 8rem;

    .row {
      display: flex;
      width: 45%;
      justify-content: space-between;
    }
    .home-info {
      width: 50%;
    }
    .drawing-wrapper {
      img {
        width: 80%;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    text-align: center;
    width: 70%;
    margin: 4rem auto;
    gap: 20rem;
  }
`;

// HomeDetails function component
export const HomeDetails = () => {
  const { home_id } = useParams(0);
  const [HomeDetails, setHomeDetails] = useState();

  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(route, { replace: true });
  };

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
          <h2 className="header">
            Ebeltoft Havnefront, boligtype {HomeDetails.acf.type}
          </h2>
          <section className="home-details">
            <div className="home-info">
              <div className="row">
                <p>Areal</p> <p>{HomeDetails.acf.area}</p>
              </div>
              <div className="row">
                <p>Værelser</p> <p>{HomeDetails.acf.rooms}</p>
              </div>
              <div className="row">
                <p>Type</p> <p>{HomeDetails.acf.type}</p>
              </div>
              <div className="row">
                <p>Pris</p> <p>{HomeDetails.acf.price}</p>
              </div>
              <div className="row">
                <p>Status</p> <p>{HomeDetails.acf.status}</p>
              </div>
            </div>
            <div className="drawing-wrapper">
              <img src={HomeDetails.acf.drawing.url} alt="plantegning" />
            </div>
          </section>
          <section className="bottom">
            <div>
              <h3>Materialeliste</h3>
              <p>
                Boligerne i Ebeltoft Havnefront bliver bygget med materialer i
                høj standard
              </p>
              <PrimaryBtn onClick={() => navigateTo("/materialer")}>
                se materialeliste
              </PrimaryBtn>
            </div>
            <div>
              <h3>Fællesarealer</h3>
              <p>
                Få mere info om de forskellige fællesarealer som følger med din
                bolig
              </p>
              <PrimaryBtn onClick={() => navigateTo("/faellesarealer")}>
                se fællesarealer
              </PrimaryBtn>
            </div>
          </section>
        </>
      ) : null}
    </StyledHomeDetails>
  );
};
