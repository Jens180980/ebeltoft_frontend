import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #80a7bf;
  padding: 5rem;
  margin-top: 10rem;
  color: white;

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
        border-bottom: 1px solid white;
        padding: 1rem 0;

        ::placeholder {
          color: white;
          font-weight: 700;
        }
      }
    }
  }
  button {
    background-color: #aebf35;
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
    padding: 1rem 3rem;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 300ms linear;

    &:hover {
      color: #aebf35;
      background-color: #fff;
      border: 1px solid #aebf35;
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
