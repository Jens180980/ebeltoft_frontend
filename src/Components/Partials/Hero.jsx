import styled from "styled-components";

const StyledHero = styled.div`
  position: relative;
  width: 100wv;
  height: 100vh;
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

  h1 {
    position: relative;
    z-index: 20;
    margin-block-end: 0;
    font-size: 5rem;
  }

  p {
    position: relative;
    z-index: 20;
    margin-block-start: 0;
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

export const Hero = ({ imgPath, headerTxt, subHeaderTxt }) => {
  return (
    <StyledHero imgPath={imgPath}>
      <h1>{headerTxt}</h1>
      <p>{subHeaderTxt}</p>
    </StyledHero>
  );
};
