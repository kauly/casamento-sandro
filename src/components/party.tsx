import * as React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import Place from "./partyPlace";
import Map from "./partyMap";
import Rspv from "./partyRspv";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
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

function Party() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number
  ) {
    setValue(newValue);
  }

  function handleChangeIndex(index: number) {
    setValue(index);
  }
  return (
    <Container id="party" theme={theme}>
      <Title theme={theme}>A Festa</Title>
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Local" />
          <Tab label="Como Chegar" />
          <Tab label="Confirme sua Presença" />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <Place dir={theme.direction} />
        <Map dir={theme.direction} />
        <Rspv dir={theme.direction} />
      </SwipeableViews>
    </Container>
  );
}

export default Party;
