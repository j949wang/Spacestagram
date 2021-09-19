import React, { Component } from "react";
import Card from "./card";
// import mockData from "../config/mockData_2.json"
import Spinner from "react-bootstrap/Spinner";


class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      imageArray: null,
    }
  }

  async componentDidMount() {
    const apiKey = "ADOxAaPacqjeyA46jMLQcNnb3btfAM2hYldv2R6b"
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`) //change to 10 for final
    const imageData = await response.json()

    let cards = []
    for (let i = 0; i < imageData.length; i++) {
      cards.push(<Card key={i} cardIndex={i} spec={imageData[i]}/>)
    }

    this.setState({
      loading: false,
      imageArray: cards
    })
  }

  render(){


    return (
        <div id="experienceContainer">
          {this.state.loading ? <Spinner animation="border" variant="light"/> : this.state.imageArray}
          {/* {cards} */}
        </div>
    );
  }
}

export default CardContainer;