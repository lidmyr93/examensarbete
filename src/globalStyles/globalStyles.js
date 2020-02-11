import styled from "styled-components";

export const H1 = styled.h1`
  color: ${props => props.color || "#2F2E2E"};
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => (props.fontSize ? `${props.fontSize}rem` : "1.7rem")};
  padding: ${props => props.padding || "20px 0 0 0"};
  margin: ${props => props.margin || 0};
  @media screen and (min-width: 768px) {
    font-size: ${props =>
      props.fontSize ? `${props.fontSize * 1.5}rem` : "2rem"};
    padding: ${props => props.padding || 0};
    width: ${props => props.width || 0};
    text-align: ${props => props.align || "center"};
  }
`;

export const H2 = styled.h1`
  color: ${props => props.color || "#2F2E2E"};
  text-align: center;
  text-transform: uppercase;
  font-size: ${props => (props.fontSize ? `${props.fontSize}rem` : "1.5rem")};
  padding: ${props => props.padding || "20px 0 0 0"};
  margin: ${props => props.margin || 0};
  @media screen and (min-width: 768px) {
    font-size: ${props =>
      props.fontSize ? `${props.fontSize * 1.1}rem` : "2rem"};
    padding: ${props => props.padding || 0};
    width: ${props => props.width || 0};
  }
`;
