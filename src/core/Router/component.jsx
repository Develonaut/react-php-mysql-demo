import { ProtectedRoute } from "core/config/ProtectedRoute/component";
import { routes } from "core/config/routes";
import { PATHS } from "core/config/urls";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

export const Router = ({ history }) => (
  <BrowserRouter>
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map(({ page, key, isProtected, ...restProps }) => {
          function renderRoute() {
            const { Component, props } = page;
            return <Component {...props} />;
          }
          if (isProtected) {
            return <ProtectedRoute key={key} {...restProps} render={renderRoute} />;
          }
          return <Route key={key} {...restProps} render={renderRoute} />;
        })}
        <Redirect to={PATHS.LOGIN} />
      </Switch>
    </ConnectedRouter>
  </BrowserRouter>
);
