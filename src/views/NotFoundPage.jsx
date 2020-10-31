/* eslint-disable indent */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, Component } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

/**
 * @class NotFoundPage
 */
class NotFoundPage extends Component {
  state = {};

  /**
   * @method render
   * @returns {JSX} not found page
   */
  render() {
    return (
      <Fragment>
        <Navbar solid />
        <NotFound message="This page does not exist" />
        <Footer />
      </Fragment>
    );
  }
}

export default NotFoundPage;
