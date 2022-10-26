import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
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
`;
