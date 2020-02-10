import styled from "styled-components";

export const ImageGridWrapper = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background: rgba(97, 135, 181, 1);
  text-decoration: none;
  color: white;
  display: initial;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
