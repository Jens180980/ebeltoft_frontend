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
    text-shadow: -1px -1px 3px rgba(0, 0, 0, 0.4),
      1px -1px 3px rgba(0, 0, 0, 0.2), -1px 1px 3px rgba(0, 0, 0, 0.2),
      1px 1px 0 rgba(0, 0, 0, 0.2);
  }

  h4 {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

export const Hero = ({ imgPath, headerTxt, subHeaderTxt }) => {
  return (
    <StyledHero imgPath={imgPath}>
      <h2>{headerTxt}</h2>
      <h4>{subHeaderTxt}</h4>
    </StyledHero>
  );
};
