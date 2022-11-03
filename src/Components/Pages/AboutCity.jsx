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

const StyledAboutCity = styled.section`
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
    display: flex;
    width: 100%;
    margin: 4rem auto;
    margin-bottom: 0;

    .left {
      width: 50%;
      background-color: ${(props) => props.theme.colors.lightblue};
      padding: 1rem 8rem;
      color: ${(props) => props.theme.colors.white};

      button {
        margin-top: 2rem;
      }
    }

    .right {
      width: 50%;
      overflow: hidden;

      img {
        height: 100%;
        display: block;
        translate: -20rem;
      }
    }
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

export const AboutCity = () => {
  return (
    <StyledAboutCity>
      <img className="vertical-wave" src={verticalWave} alt="dekoration" />
      <img className="horizontal-wave" src={horizontalWave} alt="dekoration" />

      <Hero imgPath={fregattenJylland} headerTxt="Om Ebeltoft By" />
      <section className="top">
        <h2>
          Ebeltoft - Den hyggelige kystby <br />
          på spidsen af Djursland
        </h2>
        <p>
          Nære naturoplevelser og en unik byhistorie udgør tilsammen det bærende
          kromosompar, der ligger dybt indkodet i Ebeltofts DNA.
        </p>
        <p>
          Præcis disse fundamentale kvaliteter er udgangspunktet for bylivet,
          stemningen og nærområdets popularitet, og med gåafstand til det hele
          får du størst mulig glæde af den attraktive, centrale adresse i en by,
          der favner både det spændende og det hyggelige.
        </p>
      </section>
      <section className="grid-section">
        <img
          className="firstImg"
          src={aerialMarine2}
          alt="birdview af Ebeltoft havn"
        />
        <img className="secondImg" src={woodenBoat} alt="sejlbåd i træ" />
        <div className="txtInGrid">
          <h3>
            Nære naturoplevelser <br /> og en unik byhistorie
          </h3>
          <p>
            Følg sporet fra stendysser og bronzespyd til Middelalderen, hvor
            byens købstadsprivilegier gav Ebeltoft vokseværk.
          </p>
          <p>
            Nogle af byens ældste huse kan dateres til begyndelsen af
            1600-tallet, og de brostensbelagte gader og små bindingsværkshuse
            fortæller fortsat historien på levende vis.
          </p>
          <p>
            Det samme gælder for havnefronten, hvor du passerer byens mest
            ikoniske vartegn – nemlig Fregatten Jylland, som nu nyder sit otium
            efter mange års tro tjeneste for fædrelandet.
          </p>
        </div>
      </section>
      <section className="tourism">
        <img src={ebeltoftBy} alt="skitse birdview" />
        <div className="txt-wrap">
          <h3>Populært turistmål</h3>
          <p>
            Kombinationen af by- og strandliv positionerer Ebeltoft som populært
            turistmål, og i gaderne møder du mange nordiske, europæiske og
            selvfølgelig danske dialekter.
          </p>
          <p>
            Byens mange spisesteder, cafélivet og ikke mindst
            specialforretninger løfter i dag købstadsarven, og det er en
            fornøjelse at kunne afrunde en afslappende shoppetur med lidt godt
            til ganen.
          </p>
        </div>
      </section>
      <section className="bottom">
        <div className="left">
          <h4>Seværdigheder lige foran din dør</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo
            fugit accusantium cum, aspernatur ab beatae omnis recusandae? Itaque
            suscipit libero ab sequi perferendis quo voluptatum aperiam! Quia
            labore maxime rem facere dolor perferendis modi beatae fuga iste,
            voluptatem incidunt quam dolorem iusto laudantium ex libero aperiam
            consequuntur ducimus autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            ducimus libero. Nam culpa temporibus saepe.
          </p>
          <SecondaryBtn>se mere om Maltfabrikken</SecondaryBtn>
        </div>
        <div className="right">
          <img src={maltFactory} alt="Maltfabrikken" />
        </div>
      </section>
    </StyledAboutCity>
  );
};
