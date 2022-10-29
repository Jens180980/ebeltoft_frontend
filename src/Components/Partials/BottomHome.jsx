import styled from "styled-components";

const StyledBottomHome = styled.section`
margin: 4rem 0;

.top {
  width: 80%;
  margin 0 auto;

  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
  }
}
  button {
    margin-top: 3rem;
    background-color: transparent;
    color: ${(props) => props.theme.colors.green};
    border: 1px solid ${(props) => props.theme.colors.green};
    padding: 1em 3em;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.button};
    transition: all 300ms linear;

    &:hover {
      background-color: ${(props) => props.theme.colors.green};
      color: ${(props) => props.theme.colors.white};
      border: 1px solid ${(props) => props.theme.colors.white};
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
        <button>Læs mere</button>
      </div>
    </StyledBottomHome>
  );
};
