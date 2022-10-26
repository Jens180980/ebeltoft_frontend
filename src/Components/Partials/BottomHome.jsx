import styled from "styled-components";

const StyledBottomHome = styled.section`
margin: 4rem 0;

.top {
  width: 80%;
  margin 0 auto;

  h3 {
    font-size: 1.8rem;
  }
}
  button {
    margin-top: 3rem;
    background-color: transparent;
    color: #aebf35;
    border: 1px solid #aebf35;
    padding: 1em 3em;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1.5em;
    transition: all 300ms linear;

    &:hover {
      background-color: #aebf35;
      color: #fff;
      border: 1px solid #fff;
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
