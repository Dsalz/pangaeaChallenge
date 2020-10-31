import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Views
import LandingPage from "./views/LandingPage";
import NotFoundPage from "./views/NotFoundPage";

// Components
import ScrollToTop from "./ScrollToTop";

// CSS
import "./css/App.css";

// Reducer
import rootReducer from "./store/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

const appDiv = document.getElementById("app");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  appDiv
);
