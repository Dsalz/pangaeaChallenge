import React, { Fragment, Component } from "react";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// CSS
import "../css/LandingPage.css";

/**
 * @class LandingPage
 */
class LandingPage extends Component {
  /**
   * @method render
   * @returns {JSX} landing page
   */
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="landing-page"></div>
        <Footer />
      </Fragment>
    );
  }
}

export default LandingPage;
