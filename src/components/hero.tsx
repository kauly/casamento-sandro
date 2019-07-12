import * as React from "react";
import styled from "styled-components";
import Header from "./header";
import Letter from "./textContainer";
import Menu from "./menu";
import { useTheme } from "@material-ui/styles";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../imgs/hero-main.jpg") center center no-repeat;
  background-size: cover;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  background-color: ${props => props.theme.palette.primary[50]};
  opacity: 0.3;
`;

function HeroSection() {
  const menuRef = React.createRef();
  const theme = useTheme();
  function handleClose() {
    menuRef.current.style.width = "0%";
  }

  return (
    <Hero id="hero">
      <Header menuRef={menuRef} />
      <Main theme={theme}>{/*  <Letter /> */}</Main>
      <Menu ref={menuRef} handleClose={handleClose} />
    </Hero>
  );
}

export default HeroSection;
