import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import fregattenJylland from "../../Assets/fregatten_Jylland.jpg";
import woodenBoat from "../../Assets/wooden_boat.jpg";
import aerialMarine2 from "../../Assets/aerial_marine2.jpg";
import ebeltoftBy from "../../Assets/Ebeltoft_By.jpg";
import maltFactory from "../../Assets/Maltfabrikken.jpg";
import verticalWave from "../../Assets/wave-vertical.png";
import horizontalWave from "../../Assets/wave-horizontal.png";
import { SecondaryBtn } from "../Partials/Buttons";
import drawing from "../../Assets/Situationsplan_square.png";
import modelOutside from "../../Assets/model_outside.jpg";
import modelOutsideVertical from "../../Assets/model_outside_vertical.jpg";
import birdView from "../../Assets/birdview.jpg";

const StyledCommonAreas = styled.section`
  position: relative;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  .top {
    width: 80%;
    margin: 4rem auto;

    h2 {
      margin: 3rem 0;
      font-size: ${(props) => props.theme.fontSize.h2};
      font-weight: 400;
    }

    p {
      width: 70%;
    }
  }

  .grid-section {
    width: 80%;
    margin: 4rem auto;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-auto-rows: 20vh;

    .firstImg {
      width: 100%;
      grid-row: 1 / 6;
      grid-column: 1 / 7;
    }

    .secondImg {
      display: block;
      width: 100%;
      grid-row: 4 / 10;
      grid-column: 5 / -1;
    }

    .txtInGrid {
      grid-row: 6 / 11;
      grid-column: 1 / 4;
      margin-top: -4rem;
    }
  }

  .tourism {
    width: 80%;
    margin: 8rem auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3em;
    align-items: center;

    img {
      width: 100%;
    }

    .txt-wrap {
      margin-top: 0;

      button {
        margin-top: 2rem;
      }
    }
  }

  .bottom {
  }
  .vertical-wave {
    position: absolute;
    top: 110vh;
    left: 0;
    z-index: -10;
    rotate: 180deg;
    height: 300vh;
  }

  .horizontal-wave {
    position: absolute;
    bottom: 40vh;
    right: -30vw;
    z-index: -10;
    width: 100vw;
    rotate: 180deg 180deg;
  }
`;

export const CommonAreas = () => {
  return (
    <StyledCommonAreas>
      <img className="vertical-wave" src={verticalWave} alt="dekoration" />
      <img className="horizontal-wave" src={horizontalWave} alt="dekoration" />

      <Hero imgPath={drawing} headerTxt="Fællesarealer" />
      <section className="top">
        <h2>Fællesarealer med respekt for omgivelserne</h2>
        <p>
          Der anlægges P-pladser tæt på de enkelte huse samt et antal
          supplerende pladser samlet i tilknytning til bebyggelsen, så der både
          er ekstra pladser og gældende krav opfyldes. Desuden forberedes
          P-pladserne for opladefaciliteter. Der etableres cykelparkering, dels
          nær indgangene og i parterreetagerne. Kommunen og Ebeltoft by arbejder
          netop nu på at udføre en såkaldt landskabeligt indarbejdet
          klimasikring ved mødet mellem bugten og byen, så også de havnære dele
          af byen bliver godt beskyttet mod vandstandsstigninger og stormflod.
        </p>
        <p>
          Det vil give forbedrede bygge- og anvendelsesmuligheder samt tryghed
          for de kommende beboere, ejendomme og værdier i området – ikke mindst
          for Ebeltoft Havnefront.
        </p>
      </section>
      <section className="grid-section">
        <img
          className="firstImg"
          src={modelOutsideVertical}
          alt="model udenfor"
        />
        <img className="secondImg" src={modelOutside} alt="model udenfor" />
        <div className="txtInGrid">
          <h3>Deportrum</h3>
          <p>Mere info kommer senere.</p>
        </div>
      </section>
      <section className="tourism">
        <img src={birdView} alt="birdview" />
        <div className="txt-wrap">
          <h3>Parkering</h3>
          <p>Mere info kommer senere.</p>
        </div>
      </section>
      <div className="bottom">
        <h3>Gårdmiljø</h3>
        <p>Mere info kommer senere.</p>
      </div>
    </StyledCommonAreas>
  );
};
