import React from "react";
import { Route, Switch } from "react-router-dom";

import AnimeDetailPage from "./pages/AnimeDetail";
import AnimeListPage from "./pages/AnimeList";
import CollectionListPage from "./pages/CollectionList";
import CollectionDetailPage from "./pages/CollectionDetail";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <AnimeListPage />
      </Route>
      <Route path="/collection">
        <CollectionListPage />
      </Route>
      <Route path="/anime/:id">
        <AnimeDetailPage />
      </Route>
      <Route path="/collection/:id">
        <CollectionDetailPage />
      </Route>
    </Switch>
  );
}

export default App;
