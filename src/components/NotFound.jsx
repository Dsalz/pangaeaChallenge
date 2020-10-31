import React from "react";
import { string } from "prop-types";

const NotFound = ({ message }) => (
  <div className="not-found-wrapper">
    <p>{message}</p>
  </div>
);

NotFound.propTypes = {
  message: string
};

NotFound.defaultProps = {
  message: "This item does not exist or has been removed"
};

export default NotFound;
