import styled from "styled-components";

const StyledHero = styled.div`
  position: relative;
  width: 100wv;
  height: 110vh;
  margin-top: -15vh;
  background-image: url(${(props) => props.imgPath});
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.overlay};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
`;

export const Hero = ({ imgPath }) => {
  return (
    <StyledHero imgPath={imgPath}>
      <h2>Ebeltoft Havnefront</h2>
      <p>Attraktive boliger tæt på vandet og naturen</p>
    </StyledHero>
  );
};
