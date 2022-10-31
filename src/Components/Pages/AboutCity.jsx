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
    grid-template-columns: repeat(11, 1fr);
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
      grid-row: 4 / 9;
      grid-column: 5 / -1;
    }

    .txtInGrid {
      grid-row: 5 / 11;
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
    display: flex;
    width: 80%;
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
      height: 100%;
      overflow: hidden;

      img {
        display: block;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          repellat sunt aliquam, hic dicta ratione, animi fugit in perferendis
          impedit unde accusantium vitae molestias magni eum dolorem.
          Perferendis, rem voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          nobis, iure repellendus et consequatur adipisci voluptas libero, quos
          reprehenderit eligendi, ducimus sapiente consectetur enim tempora vel.
          Accusantium recusandae dolore voluptas veniam architecto expedita,
          aliquid deleniti culpa. Sapiente, voluptas soluta sequi iste, nobis
          voluptate autem tempore quidem expedita ducimus nam perspiciatis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nulla
          eum pariatur voluptatum exercitationem obcaecati doloremque expedita
          dignissimos molestiae, tenetur a odio culpa laboriosam numquam.
          Similique obcaecati dolorum aperiam. Dolorum similique, pariatur iste
          ullam incidunt nemo natus totam quibusdam exercitationem? Labore sequi
          laudantium quo. Saepe praesentium, labore beatae perferendis soluta
          nesciunt quas, reprehenderit cupiditate illo ad recusandae odit!
          Soluta, nobis?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
          distinctio esse neque explicabo blanditiis nam, eligendi deleniti aut
          nobis quia praesentium at doloribus. Vitae esse quis iusto ullam
          impedit laudantium?
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
            Nære naturoplevelser <br /> og en unik by
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            dignissimos neque iure reiciendis fugiat perferendis nostrum dicta
            totam ad dolores consequuntur blanditiis rerum corporis molestiae,
            reprehenderit aperiam id molestias alias vero saepe ipsam ea ut
            commodi. Ipsum optio voluptatum incidunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            deleniti pariatur sint vel corporis molestiae delectus iste, quo
            doloremque nostrum quas optio atque! Excepturi non maiores incidunt
            ea dignissimos sunt?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            mollitia harum, corporis dolores officiis inventore quidem placeat
            adipisci quisquam velit. Fugiat sint ea inventore doloribus magni
            soluta. Deleniti, commodi natus.
          </p>
        </div>
      </section>
      <section className="tourism">
        <img src={ebeltoftBy} alt="skitse birdview" />
        <div className="txt-wrap">
          <h3>Populært turistmål</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi,
            dolorum explicabo a porro pariatur illo, ducimus accusantium dolor
            provident quas suscipit, quaerat modi delectus tempore.
            Reprehenderit assumenda, eaque expedita dignissimos harum obcaecati
            totam doloribus excepturi, sequi numquam omnis vitae. Libero quasi
            sint repellendus expedita voluptate aliquid modi placeat qui quae.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            eum ad eos perspiciatis, officia aperiam repudiandae natus omnis
            fuga recusandae.
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
