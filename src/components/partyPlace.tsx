import * as React from "react";
import styled from "styled-components";
const quinta = require("../imgs/quinta.jpg");
import Paper from "@material-ui/core/Paper";

const TapsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 100%;
  & .imgContainer {
    width: 100%;
    height: 400px;
    border-radius: 5px;
    background-image: url("../imgs/quinta.jpg");
    background-position: center center;
    background-repeat: no-repeat;

    background-size: cover;
  }
  & span {
    padding: 20px;
  }
`;

interface IPartyPlace {
  dir: string;
}

function PartyPlace(props: IPartyPlace) {
  return (
    <Paper>
      <TapsContainer dir={props.dir}>
        <span className="imgContainer" />
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
      </TapsContainer>
    </Paper>
  );
}

export default PartyPlace;
