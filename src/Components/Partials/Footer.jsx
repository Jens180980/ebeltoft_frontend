import styled from "styled-components";
import edcLogo from "../../Assets/edc_logo.png";
import homeLogo from "../../Assets/home_logo.png";
import { SecondaryBtn } from "./Buttons";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkblue};
  padding: 5rem;
  color: ${(props) => props.theme.colors.white};

  form {
    fieldset {
      display: flex;
      flex-direction: column;
      border: none;
      padding: 0;

      input,
      textarea {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.white};
        padding: 1rem 0;

        ::placeholder {
          color: ${(props) => props.theme.colors.white};
          font-weight: 700;
        }
      }
    }
  }

  .right-footer {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;

    img {
      width: 60%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  button {
    margin-top: 2rem;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <form>
        <h2>Kontakt os for at høre mere om Ebeltoft Havnefront</h2>
        <fieldset>
          <input id="name" name="name" placeholder="Navn"></input>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          ></input>
          <input
            id="phone"
            name="phone"
            placeholder="Telefon"
            type="tel"
          ></input>
          <textarea placeholder="Kommentar"></textarea>
        </fieldset>
        <SecondaryBtn>Indsend</SecondaryBtn>
      </form>

      <div className="right-footer">
        <div>
          <img src={edcLogo} alt="EDC logo" />
          <p>
            Nygade 62 <br /> 8400 Ebeltoft <br /> 86 34 27 00
          </p>
        </div>
        <div>
          <img src={homeLogo} alt="Home logo" />
          <p>
            Strandvejen 25C <br /> 8400 Ebeltoft <br /> 86 34 15 33
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};
