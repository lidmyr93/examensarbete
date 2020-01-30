import styled from "styled-components";

export const StyledLink = styled.a`
${props => console.log(props.width)}
${props => console.log(props.visible)}
  width: ${props => (props.width ? props.width : "200px")};
  height: 50px;
  background: rgba(97, 135, 181, 1);
  text-decoration: none;
  color: white;
  display: ${props => (props.visible ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;

  :hover {
    background: rgba(97, 13, 181, 1);
  }
  @media screen and (min-width: 768px) {
    /* display: ${props => (props.visible ? "flex" : "none")}; */
    display: flex;
  }
`;
