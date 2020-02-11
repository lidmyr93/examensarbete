import styled from "styled-components";

export const StyledLink = styled.a`
  width: ${props => (props.width ? props.width : "200px")};
  height: 50px;
  background: rgba(97, 135, 181, 1);
  text-decoration: none;
  color: white;
  display: ${props => (props.visible ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  border-radius: ${props =>
    props.borderRadius || !props.visble ? "5px" : "0px"};
  text-transform: uppercase;
  font-weight: bold;
  :hover {
    background: rgba(42, 89, 135, 1);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    border-radius: ${props => props.borderRadius || "0"};
  }
`;
