import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import lightBlue from "@material-ui/core/colors/lightBlue";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: indigo
  },
  typography: {
    fontFamily: ["Calibri", "Arial", "sans-serif"].join(",")
  }
});

export default theme;
