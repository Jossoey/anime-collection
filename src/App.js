import React from "react";
import { Route, Switch } from "react-router-dom";

import AnimeDetailPage from "./pages/AnimeDetail";
import AnimeListPage from "./pages/AnimeList";
import CollectionListPage from "./pages/CollectionList";
import CollectionDetailPage from "./pages/CollectionDetail";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AnimeListPage />
        </Route>
        <Route path="/collection" exact>
          <CollectionListPage />
        </Route>
        <Route path="/anime/:id">
          <AnimeDetailPage />
        </Route>
        <Route path="/collection/:name">
          <CollectionDetailPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
