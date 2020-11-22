import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Views
import LandingPage from "./views/LandingPage";

// CSS
import "./css/App.css";

const client = new ApolloClient({
  uri: "https://pangaea-interviews.now.sh/api/graphql",
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LandingPage} />
    </BrowserRouter>
  );
};

const appDiv = document.getElementById("app");

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  appDiv
);
