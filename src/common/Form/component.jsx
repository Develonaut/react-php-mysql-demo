import React from "react";
import { Formik, Form as FormikForm } from "formik";
import { FormikDebugger } from "core";
import { useStyles } from "./styles";

export function Form({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  debug = false,
  ...restProps
}) {
  const classes = useStyles();
  return (
    <Formik
      className={classes.root}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...restProps}
    >
      <FormikForm>
        {children}
        {!!debug && <FormikDebugger />}
      </FormikForm>
    </Formik>
  );
}
