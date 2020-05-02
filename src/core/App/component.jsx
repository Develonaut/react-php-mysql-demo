import { MuiThemeProvider, StylesProvider } from "@material-ui/core";
import { jss } from "core/config/jss";
import { createTheme } from "core/config/theme";
import { Router } from "core/Router";
import { startApp } from "core/store/actions/AppActions";
import { getReady } from "core/store/selectors/AppSelectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";

export const AppPresentation = ({ history, isReady, dispatchStartApp }) => {
  useEffect(() => {
    dispatchStartApp();
  }, [dispatchStartApp]);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider
        theme={createTheme({
          palette: {
            type: "dark"
          }
        })}
      >
        {!isReady ? <></> : <Router history={history} />}
      </MuiThemeProvider>
    </StylesProvider>
  );
};

const mapStateToProps = (state) => ({
  isReady: getReady(state)
});

const mapDispatchToProps = {
  dispatchStartApp: startApp
};

export const App = connect(mapStateToProps, mapDispatchToProps)(AppPresentation);
