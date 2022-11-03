import styled from "styled-components";
import { PrimaryBtn } from "./Buttons";
import modelInside from "../../Assets/model_inside.jpg";
import aerial from "../../Assets/aerial_3.jpg";
import { useNavigate } from "react-router-dom";
import verticalWave from "../../Assets/wave-vertical.png";

const StyledBottomHome = styled.section`
margin: 4rem 0;
position: relative;

button {
  margin: 2rem 10%;
}

.top {
  width: 45%;
  margin 4rem 10%;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
}

.bottom {
  width: 80%;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr );
  grid-template-rows: repeat(12, 1fr);
  grid-auto-rows: 20vh;

  img {
    display: block;
    width: 100%;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }

  #top-img {
    object-fit: cover;
    grid-row: 1 / 6;
    grid-column: 1 / 7;
  }

  #top-txt {
    grid-row: 2 / 4;
    grid-column: 8 / -1;
  }

  #bottom-img {
    grid-row: 5 / -1;
    grid-column: 6 / -1;
  }

  #bottom-txt {
    grid-row: 7 / 10;
    grid-column: 1 / 5;
  }

  #btn {
    grid-row: 11 / -1;
    grid-column: 1 / 5;
  }
}

#wave-bottom {
  position: absolute;
  bottom:0;
  left: -10vw;
  z-index: -10;
}
`;

export const BottomHome = () => {
  const navigate = useNavigate();
  const navigateTo = (route) => {
    navigate(route, { replace: true });
  };
  return (
    <StyledBottomHome>
      <div className="top">
        <h3>
          Klassisk havnemiljø møder <br /> moderne nordisk arkitektur
        </h3>
        <p>
          Med placeringen i første række og med udsigt til Ebeltoft vig, Ahl
          Hage og Mols Bjerge, får de nye boliger ved på Ebeltoft Havnefront den
          bedst tænkelige placering. Boligerne indrettes i fem huse med
          varierede facadeforløb og højder. Det muliggør en unik kontakt til
          omgivelserne og et mangfoldigt og levende miljø.
        </p>
        <PrimaryBtn onClick={() => navigateTo("/om-ebeltoft-havnefront")}>
          Læs mere
        </PrimaryBtn>
      </div>
      <div className="bottom">
        <img id="top-img" src={modelInside} alt="inde i bolig" />
        <div id="top-txt" className="text-wrap">
          <h3>Unikke materialer i egetræ</h3>
          <p>
            Boligerne bliver lavet med mulighed for at inkludere et tidsløse
            materialer i egetræsfiner, både på loft, gulv og vinduer.
          </p>
        </div>
        <div id="bottom-txt" className="text-wrap">
          <h3>
            Nære naturoplevelser <br /> og en unik byhistorie
          </h3>
          <p>
            Kombinationen af by- og strandliv positionerer Ebeltoft som populært
            turistmål, og i gaderne møder du mange nordiske, europæiske og
            selvfølgelig danske dialekter.
          </p>
        </div>
        <img id="bottom-img" src={aerial} alt="luftfoto af havn og bugt" />
        <div id="btn">
          <PrimaryBtn onClick={() => navigateTo("om-ebeltoft-by")}>
            læs mere
          </PrimaryBtn>
        </div>
      </div>
      <img id="wave-bottom" src={verticalWave} alt="pynt" />
    </StyledBottomHome>
  );
};
