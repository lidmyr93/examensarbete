import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  position: ${props =>
    props.currentPage === "/home" ? "absolute" : "relative"};
  justify-content: flex-end;
  z-index: 10;
  background: ${props =>
    props.currentPage === "/home"
      ? "rgba(0, 0, 0, 0.3)"
      : `url(${props.background})`};

  border-bottom: ${props =>
    props.currentPage === "/home" ? "none" : "5px solid blue"};
`;

export const StyledNav = styled.nav`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  background: orange;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
  color: ${props => (props.active === "true" ? "blue" : "white")};
  a {
    text-decoration: none;
    font-size: 2em;
    color: white;
    :hover {
      color: lightblue;
    }
  }
  @media screen and (min-width: 768px) {
    position: initial;
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-right: 300px;
    background: transparent;
    transform: translateX(0);

    a {
      font-size: 1.2rem;
    }
  }
`;
