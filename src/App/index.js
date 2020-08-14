import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import routes from "./routes";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          {routes.map(({ path, component, secured }) => (
            <Route key={path} path={path} exact component={component} />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
