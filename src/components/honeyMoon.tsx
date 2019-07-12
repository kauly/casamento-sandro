import * as React from "react";
import styled from "styled-components";
import Item from "./honyMoonItem";
import Roteiros, { IRoteiros } from "../utils/roteiros";
import { useTheme } from "@material-ui/core/styles";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.palette.primary[100]};
  padding: 20px;
`;

const Title = styled.p`
  margin: 40px 0;
  text-align: center;
  font-size: 35px;
  font-weight: 800px;
  color: ${props => props.theme.palette.primary.contrastText};
`;

function HoneyMoon() {
  const theme = useTheme();
  return (
    <Container id="honeymoon" theme={theme}>
      <Title theme={theme}>Lua de Mel</Title>
      <GridContainer>
        {Roteiros.map((roteiro: IRoteiros, n: number) => (
          <Item
            text={roteiro.text}
            title={roteiro.title}
            price={roteiro.price}
            key={n}
          />
        ))}
      </GridContainer>
    </Container>
  );
}

export default HoneyMoon;
