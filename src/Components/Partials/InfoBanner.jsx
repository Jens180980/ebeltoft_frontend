import styled from "styled-components";

const StyledInfobanner = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.darkblue};
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 0;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    margin: 0;
  }
`;

export const InfoBanner = () => {
  return (
    <StyledInfobanner>
      <div>
        <h3>50</h3>
        <p>Boliger</p>
      </div>
      <div>
        <h3>2-4</h3>
        <p>Værelser</p>
      </div>
      <div>
        <h3>2023</h3>
        <p>Til overtagelse</p>
      </div>
      <div>
        <h3>10 m</h3>
        <p>Til vandet</p>
      </div>
    </StyledInfobanner>
  );
};
