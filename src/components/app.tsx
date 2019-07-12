import * as React from "react";
import Hero from "./hero";
import Party from "./party";
import HoneyMoon from "./honeyMoon";
import NoSsr from "@material-ui/core/NoSsr";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../utils/myTheme";
function App() {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Hero />
        <Party />
        <HoneyMoon />
      </ThemeProvider>
    </NoSsr>
  );
}

export default App;
