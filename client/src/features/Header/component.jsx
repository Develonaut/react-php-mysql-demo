import Grid from "@material-ui/core/Grid";
import { AppBar, Button, ElevationScroll, Toolbar } from "common";
import { PATHS } from "core/config/urls";
import { getIsAuthenticated } from "core/store/selectors/UserSelectors";
import { UserMenu } from "features/UserMenu";
import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./styles";

function HeaderPresentation({ isAuthenticated }) {
  const classes = useStyles();

  return (
    <ElevationScroll>
      <AppBar className={classes.root} color="primary" position="sticky">
        <Toolbar>
          <Grid container spacing={1} alignContent="space-between">
            <Grid item xs />
            <Grid item container xs={2} justify="flex-end">
              {isAuthenticated && <UserMenu />}
              {!isAuthenticated && (
                <>
                  <Button to={PATHS.SIGN_UP}>Signup</Button>
                  <Button to={PATHS.LOGIN}>Login</Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state)
});

export const Header = connect(mapStateToProps)(HeaderPresentation);
