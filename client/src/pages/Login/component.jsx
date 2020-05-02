import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { buildUrl, PATHS } from "core/config/urls";
import { login } from "core/store/actions/UserActions";
import React, { useCallback } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Typography, Form, TextField, Link, Checkbox, Button, Grid, Avatar, Paper } from "common";
import { useStyles } from "./styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required")
});

const initialValues = {
  email: "",
  password: "",
  remme: false
};

export function LoginPresentation({ dispatchLogin }) {
  const history = useHistory();
  const classes = useStyles();

  const loginCallback = useCallback(async () => {
    await dispatchLogin();
    return history.push(PATHS.PROFILE);
  }, [dispatchLogin, history]);

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Form
            className={classes.form}
            onSubmit={loginCallback}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <TextField
              fullWidth
              label="Email Address*"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              fullWidth
              name="password"
              label="Password*"
              type="password"
              autoComplete="current-password"
            />
            <Checkbox label="Remember me" name="remme" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Form>
          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2">
                <Typography value="Forgot password?" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={buildUrl({
                  path: PATHS.SIGN_UP
                })}
                variant="body2"
              >
                <Typography value="Don't have an account? Sign Up" />
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = {
  dispatchLogin: login
};

export const Login = connect(null, mapDispatchToProps)(LoginPresentation);
