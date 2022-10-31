import styled from "styled-components";
import { PrimaryBtn } from "./Buttons";

const StyledBottomHome = styled.section`
margin: 4rem 0;

button {
  margin-top: 2rem;
}

.top {
  width: 80%;
  margin 0 auto;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
}
`;

export const BottomHome = () => {
  return (
    <StyledBottomHome>
      <div className="top">
        <h3>Overskrift</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis sunt
          quis necessitatibus incidunt quo dolorum adipisci reprehenderit
          molestias ad magni sint illo est minus animi illum sequi nesciunt,
          repudiandae saepe maiores. Dolorem a, reprehenderit deleniti quod
          consequuntur enim ratione cum.
        </p>
        <PrimaryBtn>Læs mere</PrimaryBtn>
      </div>
    </StyledBottomHome>
  );
};
