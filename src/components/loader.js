import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

class Loader extends Component {
  render() {
    return (
      <Row className="spinnerRow">
        <Spinner className="spinner" animation="border" variant="light"/> Grabbing some images....
      </Row>
    );
  }
}

export default Loader;