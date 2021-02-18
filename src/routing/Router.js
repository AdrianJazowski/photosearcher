/** @format */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import PhotoView from "../views/PhotosView/PhotoView";
import SearchEngine from "../views/SearchEngine/SearchEngineView";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={SearchEngine} />
        <Route path={routes.photos} component={PhotoView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
