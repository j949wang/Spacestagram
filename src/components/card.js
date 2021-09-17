import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Card extends Component {
  render() {
    let cardSpec = this.props.spec;
    return (
      <Container className="sectionContainer cardContainer" fluid>
        <Row className="cardRow"> 
          <Col className="cardCol cardImage" >
            <Image src={cardSpec.url} fluid />
          </Col>
          <Col className="cardCol cardText" >
            <p className="cardTitle">
              {cardSpec.title}
            </p>
            <p className="positionTitle">{cardSpec.date}</p>
            <p className="cardInfo">{cardSpec.explanation}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;