import { Container } from "@material-ui/core";
import clsx from "clsx";
import { SEO } from "core/SEO/component";
import { Header } from "features/Header";
import React from "react";
import { useStyles } from "./styles";

export const DefaultPageContainer = ({ seo, children, className = "" }) => {
  const classes = useStyles();
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      data-test-selector="main"
      className={clsx([classes.root, className])}
    >
      <SEO {...seo} />
      <Header />
      <div data-test-selector="content" className={classes.content}>
        {children}
      </div>
    </Container>
  );
};
