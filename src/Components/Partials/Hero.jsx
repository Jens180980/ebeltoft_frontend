import styled from "styled-components";
import BGimage from "../../Assets/hero_front.jpg";

const StyledHero = styled.div`
  width: 100wv;
  height: 110vh;
  margin-top: -15vh;
  background-image: url(${BGimage});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Hero = () => {
  return (
    <StyledHero>
      <h2>Ebeltoft Havnefront</h2>
      <p>Attraktive boliger tæt på vandet og naturen</p>
    </StyledHero>
  );
};
