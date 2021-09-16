import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CaLogo from "../img/CA_Glass_Logo_no_bg.png";

class Card extends Component {
  render() {
    let cardSpec = this.props.spec;
    return (
      <Container className="sectionContainer cardContainer" fluid>
        <Row className="cardRow"> 
          <Col className="cardCol cardImage" >
            <Image src={CaLogo} fluid />
          </Col>
          <Col className="cardCol cardText" >
            <p className="cardTitle">
              {cardSpec.company.name}
            </p>
            <p className="positionTitle">{cardSpec.company.position}</p>
            <p className="cardInfo">{cardSpec.description}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;