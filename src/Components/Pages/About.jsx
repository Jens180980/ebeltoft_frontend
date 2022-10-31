import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerialMarine from "../../Assets/aerial_marine.jpg";
import birdView from "../../Assets/birdview.jpg";
import modelOutside from "../../Assets/model_outside.jpg";
import situationDrawing from "../../Assets/Situationsplan.jpg";
import verticalWave from "../../Assets/wave-vertical.png";
import horizontalWave from "../../Assets/wave-horizontal.png";
import { PrimaryBtn } from "../Partials/Buttons";

const StyledAbout = styled.section`
  position: relative;
  margin-bottom: 20rem;
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
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
      margin-top: -8vh;
      grid-row: 5 / 11;
      grid-column: 1 / 4;
    }
  }

  .common-areas {
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3em;

    img {
      width: 100%;
    }

    .txt-wrap {
      margin-top: 0;

      h3 {
        margin: 0;
      }

      button {
        margin-top: 2rem;
      }
    }
  }

  .bottom {
    width: 50%;
    margin: 4rem 10%;
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
    bottom: -40vh;
    right: -30vw;
    z-index: -10;
    width: 100vw;
    rotate: 180deg 180deg;
  }
`;

export const About = () => {
  return (
    <StyledAbout>
      <img className="vertical-wave" src={verticalWave} alt="dekoration" />
      <img className="horizontal-wave" src={horizontalWave} alt="dekoration" />

      <Hero imgPath={aerialMarine} headerTxt="Om Ebeltoft Havnefront" />
      <section className="top">
        <h2>
          Nyt eksklusivt boligkompleks <br />i flotte omgivelser ud til Ebeltoft
          Vig
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
          src={birdView}
          alt="birdview af Ebeltoft havn"
        />
        <img className="secondImg" src={modelOutside} alt="3d model udendørs" />
        <div className="txtInGrid">
          <h3>
            Klassisk havnemiljø møder <br /> moderne nordisk arkitektur
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
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            repellendus incidunt at est, ullam aperiam ut omnis repudiandae
            reiciendis commodi!
          </p>
        </div>
      </section>
      <section className="common-areas">
        <img src={situationDrawing} alt="skitse birdview" />
        <div className="txt-wrap">
          <h3>Funktionelle fællesarealer</h3>
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
          <PrimaryBtn>Se mere om fællesarealer</PrimaryBtn>
        </div>
      </section>
      <section className="bottom">
        <h3>Klar til indflytning i 2024</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          dignissimos officiis facilis, quis quasi velit sapiente ab, fugiat
          nam, amet assumenda adipisci pariatur expedita ipsum enim. Sapiente,
          dolor! Quam, tenetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?
          Dolores rem ut tempore numquam assumenda hic odit aliquid molestias.
        </p>
      </section>
    </StyledAbout>
  );
};
