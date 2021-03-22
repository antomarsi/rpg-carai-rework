import * as React from "react";

// Material UI initialization
import { CssBaseline, withWidth } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "../theme";
import Routes from "./routes";

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    );
  }
}

export default withWidth()(App);
