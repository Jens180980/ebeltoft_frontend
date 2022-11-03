import { Hero } from "../Partials/Hero";
import styled from "styled-components";
import { TempSlider } from "../Partials/TempSlider";
import { useNavigate } from "react-router-dom";

import wave from "../../Assets/wave-horizontal.png";
import heroFront from "../../Assets/aerial_3.jpg";

import { InfoBanner } from "../Partials/InfoBanner";
import { HorizontalScroll } from "../Partials/HorizontalScroll";
import { BottomHome } from "../Partials/BottomHome";
import { PrimaryBtn } from "../Partials/Buttons";

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
margin-bottom: 4rem;

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
        font-size: ${(props) => props.theme.fontSize.p}
      }
      button {
        margin-right: 56%;
      }
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
        <h2>
          Ejerlejligheder med <br />
          panorama til Ebeltoft Vig
        </h2>
      </StyledSubHeader>
      <StyledSlider>
        <div className="inner-wrap-slider">
          <TempSlider />
          <div className="text-wrap">
            <p>
              Med placeringen i første række og med udsigt til Ebeltoft vig, Ahl
              Hage og Mols Bjerge, får de nye boliger ved på Ebeltoft Havnefront
              den bedst tænkelige placering. Bygninger og overflader i hvidt og
              sort karakteriserer omgivelserne på Ebeltoft Havnefront
            </p>
            <p>
              Boligerne bliver lavet med mulighed for at inkludere et tidsløse
              materialer i egetræsfiner, både på loft, gulv og vinduer.{" "}
            </p>
            <PrimaryBtn onClick={navigateSeeHomes}>Se Boliger</PrimaryBtn>
          </div>
        </div>
      </StyledSlider>
      <InfoBanner />
      <HorizontalScroll />
      <BottomHome />
    </section>
  );
};
