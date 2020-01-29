import styled from "styled-components";

export const StyledLinkImage = styled.div`
  img {
    display: ${props => (props.visible ? "none" : "block")};
  }

  @media screen and (min-width: 768px) {
    img {
      display: block;
      width: 300px;
      height: 150px;
      border-radius: 5px;
    }
  }
`;
