import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import { CollectionContextProvider } from './context/CollectionContext';

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <CollectionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CollectionContextProvider>
  </ApolloProvider>
);
