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
import modelInside from "../../Assets/model_inside.jpg";
import kitchen from "../../Assets/koekken.png";
import panels from "../../Assets/lamel.png";
import sink from "../../Assets/haandvask.jpg";

const StyledMaterials = styled.section`
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
    grid-template-rows: repeat(9, 1fr);
    grid-auto-rows: 20vh;

    .firstImg {
      width: 100%;
      grid-row: 1 / 6;
      grid-column: 1 / 7;
    }

    .secondImg {
      display: block;
      width: 100%;
      grid-row: 5 / 10;
      grid-column: 5 / -1;
    }

    .txtInGrid {
      grid-row: 6 / 10;
      grid-column: 1 / 4;
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
    width: 80%;
    margin: 10rem auto;
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

export const Materials = () => {
  return (
    <StyledMaterials>
      <img className="vertical-wave" src={verticalWave} alt="dekoration" />
      <img className="horizontal-wave" src={horizontalWave} alt="dekoration" />

      <Hero imgPath={modelInside} headerTxt="Materialer" />
      <section className="top">
        <h2>
          Gennemførte materialer, fører <br /> tankerne hen på det lokale
          havnemiljø
        </h2>
        <p>
          Farve- og materialepaletten fra de udvendige på bygningerninger
          fortsætter ind i husene og møder egetræ, messing og rustfrit stål samt
          farver og materialer, der hører til på havnen, blandt bådene og i den
          omgivende natur.
        </p>
        <p>
          Inde i boligerne er det f.eks. egeplanker på gulvene og akustisk
          absorberende lofter, der kan sikre en harmonisk helhed.
        </p>
        <p>
          Ebeltoft Havnefront bliver netop nu projekteret, så der skabes en smuk
          helhed med stedet. De mange ønsker, der naturligt opstår når den
          individuelle bolig skal indrettes, kan med boligernes inventar og
          udstyr tilvælges, så overflader, køkken, sanitet mv. opfylder særlige
          ønsker.
        </p>
      </section>
      <section className="grid-section">
        <img className="firstImg" src={kitchen} alt="køkken" />
        <img className="secondImg" src={panels} alt="trælammeller" />
        <div className="txtInGrid">
          <h3>Egetræ igennem hele linjen</h3>
          <p>
            Boligerne består af massive egetræs plankegulv i højeste kvalitet og
            gående vinduesrammer i eg. Hertil kan man som tilvalg inkludere
            vores eksklusive linje som løsning i både køkken samt garderobe og
            soveværelser, i form af låger i egefiner. Ligeledes i form af
            akustikloft og døre i egefiner, samt fodlister i massiv eg, som
            tilsammen giver rene og varme linjer igennem hele boligen.
          </p>
        </div>
      </section>
      <section className="tourism">
        <img src={sink} alt="håndvask armatur" />
        <div className="txt-wrap">
          <h3>Vola Armaturer</h3>
          <p>
            Med armaturserien fra VOLA, får du ikke kun et produkt, hvor design
            og kvalitet holder i generationer. Du bliver også en del af den
            danske designhistorie med danske designikoner produceret i den
            bedste danske håndværkstradition
          </p>
        </div>
      </section>
      <div className="bottom">
        <h3>Klinker & Sanitet</h3>
        <p>
          Badeværelserne bliver belagt med store kvalitetsklinker, med smalle
          fuger i rustik look. Til sanitet inkluderes der Duravit vask og
          toilet, som med sine bløder former har et tidsløst design.{" "}
        </p>
      </div>
    </StyledMaterials>
  );
};
