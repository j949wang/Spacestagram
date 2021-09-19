import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LikeButton from "./likeButton";
import ShareButton from "./shareButton"

class Card extends Component {
  render() {
    let cardSpec = this.props.spec;
    let cardIndex = this.props.cardIndex;
    
    return (
      <Container className="sectionContainer cardContainer" fluid>
        <Row className="cardRow"> 
          <Col className="cardCol cardImage" >
            {cardSpec.media_type === "image" ? <Image src={cardSpec.url} fluid /> : <iframe src={cardSpec.url} width={838} height={471} style={{borderRadius : '12px 12px 0 0'}}/>}
          </Col>
          <Col className="cardCol cardText" >
            <p className="cardTitle">
              {cardSpec.title}
            </p>
            <p className="positionTitle">{cardSpec.date}</p>
            <p className="cardInfo">{cardSpec.explanation}</p>
            
          </Col>
          <Col className="cardButton">
            <LikeButton buttonIndex={cardIndex}/>   
            <ShareButton buttonIndex={cardIndex} shareLink={cardSpec.url}/> 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Card;