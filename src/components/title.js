import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Title extends Component {
  componentDidMount() {
    const experience = document.getElementsByClassName("titleDescription")[0]
    const cards = document.getElementsByClassName("cardContainer");

    const isFullySeen = el => el &&
    typeof el.getBoundingClientRect === 'function' &&
    el.getBoundingClientRect()['bottom'] + window.scrollY <= 
      window.innerHeight + window.scrollY && 
    el.getBoundingClientRect()['top'] + window.scrollY <= 
    window.innerHeight + window.scrollY;

    const isPartiallySeen = el => el &&
    typeof el.getBoundingClientRect === 'function' &&
    el.getBoundingClientRect()['top'] + window.scrollY + 50<= 
    window.innerHeight + window.scrollY;

    if (isFullySeen(experience)) {
      experience.classList.add("isVisible")
    }
    
    window.onscroll = () => {

      if (isFullySeen(experience)) {
        experience.classList.add("isVisible")
      } else if (experience.classList.contains("isVisible")){
        experience.classList.remove("isVisible")
      }

      for (var i = 0; i < cards.length; i++) {
        if (isPartiallySeen(cards[i])) {
          cards[i].classList.add("isVisible");
        } else if (cards[i].classList.contains("isVisible")) {
          cards[i].classList.remove("isVisible");
        }
      }
    }

  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return (
      <Container id="experience" className="sectionContainer" fluid>
        <Row className="sectionTitle title">{this.props.text}</Row>
        <Row className="sectionTitle titleDescription">Welcome to Spacestagram. Take a gander at our selection of photos. Leave a like and share! </Row>
    
      </Container>
    );
  }
}

export default Title;