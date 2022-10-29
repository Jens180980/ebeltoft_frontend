import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.darkblue};
  padding: 5rem;
  margin-top: 10rem;
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
  button {
    background-color: ${(props) => props.theme.colors.green};
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    padding: 1rem 3rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize.button};
    cursor: pointer;
    transition: all 300ms linear;

    &:hover {
      color: ${(props) => props.theme.colors.green};
      background-color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.green};
    }
  }
  .right-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
        <button>Indsend</button>
      </form>

      <div className="right-footer">
        <p>EDC Logo</p>
        <div>
          <p>Nygade 62, 8888 Ebeltoft</p>
          <p>88 88 88 88</p>
        </div>
      </div>
    </StyledFooter>
  );
};
