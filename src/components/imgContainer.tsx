import * as React from "react";
import styled from "styled-components";
const back = require("../imgs/hero-main.jpg");

const Container = styled.div`
  flex: 1;

  & img {
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function ImgContainer() {
  return (
    <Container>
      <img src={back} />
    </Container>
  );
}

export default ImgContainer;
