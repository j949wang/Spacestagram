import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Footer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <Row className="footerRow">
          <Col className="footerCol">
            <p className="signoff">
              Please check out my website:
              <a href="https://j949wang@github.io/personal-portfolio/"> Here</a>
            </p>
            <p className="copyright">
              &#169; Last updated 2021. Jiaxi Wang. All rights reserved.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;