import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  border-color: red;
  width: auto;
  margin: 55px auto;
`;
export const Loading = props => {
  return (
    <div>
      <h1 style={{}}>Loading {props.loadinginfo}</h1>
      <BeatLoader css={override} sizeUnit={"px"} size={50} color={"#123abc"} />
    </div>
  );
};
