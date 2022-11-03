import styled from "styled-components";
import { Hero } from "../Partials/Hero";
import house_model from "../../Assets/model_inside.jpg";
import edcLogo from "../../Assets/edc_logo.png";
import homeLogo from "../../Assets/home_logo.png";

const StyledContacts = styled.section`

p {
  font-size: ${(props) => props.theme.fontSize.p};
}
.title {
  width: 80%;
  margin: 8rem auto;
}

a {
  text-decoration: none;
  color: black;
}

.flex-section {
  width: 80%;
  margin: 8rem auto;
  display: flex;
  justify-content: space-around;

  img {
    width: 60%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
}
`;

export const Contacts = () => {
  return (
    <StyledContacts>
      <Hero imgPath={house_model} headerTxt="KONTAKT" />
      <p className="title">
        Ebeltoft Havnefront bliver formidlet og solgt igennem EDC og Home i
        Ebeltoft. Yderligere kontaktinfo kan du finde herunder eller udfyld
        vores kontaktformular i bunden af hjemmesiden.{" "}
      </p>
      <div className="flex-section">
        <div>
          <img src={edcLogo} alt="EDC logo" />
          <p>
            Nygade 62 <br /> 8400 Ebeltoft <br /> 86 34 27 00 <br />
            <a href="http://www.edc.dk/ebeltoft/">
              http://www.edc.dk/ebeltoft/
            </a>
          </p>
        </div>
        <div>
          <img src={homeLogo} alt="Home logo" />
          <p>
            Strandvejen 25C <br /> 8400 Ebeltoft <br /> 86 34 15 33 <br />
            <a href="https://home.dk/ebeltoft">https://home.dk/ebeltoft</a>
          </p>
        </div>
      </div>
    </StyledContacts>
  );
};
