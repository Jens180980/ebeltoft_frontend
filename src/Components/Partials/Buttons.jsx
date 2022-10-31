import styled from "styled-components";

export const PrimaryBtn = styled.button`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.green};
  border: 1px solid ${(props) => props.theme.colors.green};
  padding: 1em 2em;
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
`;

export const SecondaryBtn = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.green};
  padding: 1em 2em;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.button};
  transition: all 300ms linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.green};
    border: 1px solid ${(props) => props.theme.colors.green};
  }
`;
