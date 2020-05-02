import { Paper } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { buildUrl, PATHS } from "core/config/urls";
import React from "react";
import { TextField, Form, Typography, Grid, Avatar, Button, Link } from "common";
import * as Yup from "yup";
import { useStyles } from "./styles";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required()
});

function handleSubmit(values, actions) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 1000);
}

const initialValues = {
  userName: "",
  email: "",
  password: ""
};

export function SignUp() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Form
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            <TextField fullWidth label="Username" name="userName" autoComplete="uname" />
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
            />
            <TextField
              fullWidth
              type="password"
              name="password"
              label="Password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to={buildUrl({
                    path: PATHS.LOGIN
                  })}
                  variant="body2"
                >
                  <Typography value="Already have an account? Login" />
                </Link>
              </Grid>
            </Grid>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
}
