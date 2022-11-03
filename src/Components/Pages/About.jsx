import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import aerialMarine from "../../Assets/aerial_marine.jpg";
import birdView from "../../Assets/birdview.jpg";
import modelOutside from "../../Assets/model_outside.jpg";
import situationDrawing from "../../Assets/Situationsplan_square.png";
import verticalWave from "../../Assets/wave-vertical.png";
import horizontalWave from "../../Assets/wave-horizontal.png";
import { PrimaryBtn } from "../Partials/Buttons";
import { useNavigate } from "react-router-dom";

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
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-auto-rows: 20vh;

    .firstImg {
      width: 100%;
      object-fit: cover;
      display: block;
      grid-row: 1 / 5;
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
      grid-row: 5 / -1;
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
  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(route, { replace: true });
  };
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
          Med placeringen i første række og med udsigt til Ebeltoft vig, Ahl
          Hage og Mols Bjerge, får de nye boliger ved på Ebeltoft Havnefront den
          bedst tænkelige placering.
        </p>
        <p>
          Boligerne indrettes i fem huse med varierede facadeforløb og højder.
          Det muliggør en unik kontakt til omgivelserne og et mangfoldigt og
          levende miljø. Friarealerne mellem husene indrettes med
          opholdsmuligheder og belagte flader, der gradvist fletter sig sammen
          med kystens naturlige landskab og vegetation - her mødes by,
          hav-kultur og natur.{" "}
        </p>
        <p>
          De forskudte placeringer og planløsninger understreger også karakteren
          af varierede og individuelle boliger. Her er god plads til udeophold
          med lys og udsigt i fokus, og er der er indarbejdet tagterrasser med
          adgang for beboerne fra hver trappe eller elevator. Tagterrasserne
          indrettes og møbleres så der er ekstra plads til at nyde de gode
          sommerdage, de lune aftener eller alle de fantastiske udsigter stedet
          byder på.{" "}
        </p>
        <p>
          Boligerne indrettes overvejende som 2, 3 og 4 værelseslejligheder.
          Variationen i boligernes størrelser og indretning imødekommer beboere
          med forskellige behov og ønsker, ikke mindst for beboersegmentet 50+.
          Der er lagt vægt på at skabe gode solfyldte og lyse boliger, hvor alle
          har udsigt til vand, by og natur.{" "}
        </p>
        <p>
          Boligernes rum er desuden tilpasset og placeret, så der dels er god
          indbyrdes kontakt imellem dem, og så de gennem livet og over tid kan
          tjene forskellige formål; hjemmekontor, spiserum, soverum, bibliotek,
          hobbyrum, gæsteværelse m.v.
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
            Bygninger og overflader i hvidt og sort karakteriserer omgivelserne
            på Ebeltoft Havnefront, hvor Fregatten, Glasmuseet, og en stor del
            af byen - ikke mindst mange bygninger, der gennem tiden er tegnet af
            Friis & Moltke i Ebeltoft, bærer samme kendetegn.
          </p>
          <p>
            De hvide overflader i malet eller vandskuret murværk, de robuste
            betonoverflader, metalplader og sort træværk - sanseindtryk som
            leder tankerne hen på havnemiljøets kalkede huse, tjærede hyttefade,
            planker og tovværk.{" "}
          </p>
          <p>
            Farve- og materialepaletten fortsætter ind i husene og møder egetræ,
            messing og rustfrit stål samt farver og materialer, der hører til på
            havnen, blandt bådene og i den omgivende natur.{" "}
          </p>
          <p>
            Inde i boligerne er det f.eks. egeplanker på gulvene og akustisk
            absorberende lofter, der kan sikre en harmonisk helhed.
          </p>
        </div>
      </section>
      <section className="common-areas">
        <img src={situationDrawing} alt="skitse birdview" />
        <div className="txt-wrap">
          <h3>Funktionelle fællesarealer</h3>
          <p>
            Der anlægges P-pladser tæt på de enkelte huse samt et antal
            supplerende pladser samlet i tilknytning til bebyggelsen, så der
            både er ekstra pladser og gældende krav opfyldes. Desuden forberedes
            P-pladserne for opladefaciliteter. Der etableres cykelparkering,
            dels nær indgangene og i parterreetagerne. Kommunen og Ebeltoft by
            arbejder netop nu på at udføre en såkaldt landskabeligt indarbejdet
            klimasikring ved mødet mellem bugten og byen, så også de havnære
            dele af byen bliver godt beskyttet mod vandstandsstigninger og
            stormflod.
          </p>
          <p>
            Det vil give forbedrede bygge- og anvendelsesmuligheder samt tryghed
            for de kommende beboere, ejendomme og værdier i området – ikke
            mindst for Ebeltoft Havnefront.
          </p>
          <PrimaryBtn onClick={() => navigateTo("/faellesarealer")}>
            Se mere om fællesarealer
          </PrimaryBtn>
        </div>
      </section>
      <section className="bottom">
        <h3>Klar til indflytning i 2024</h3>
        <p>
          Ebeltoft Havnefront bliver netop nu udviklet og der skitseres fortsat,
          så der skabes en smuk helhed med stedet og de mange ønsker, der
          naturligt opstår, når den individuelle bolig skal indrettes.
        </p>
        <p>
          Derfor kan boligernes inventar og udstyr naturligvis tilvælges, så
          overflader, køkken, sanitet m.v. opfylder særlige ønsker.
        </p>
      </section>
    </StyledAbout>
  );
};
