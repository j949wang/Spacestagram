import React, { Component } from "react";
import Card from "./card";


class CardContainer extends Component {
  // async componentDidMount() {
  //   // const apiKey = "ADOxAaPacqjeyA46jMLQcNnb3btfAM2hYldv2R6b"
  //   // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  //   // const data = await response.json()
  //   // console.log(data)
  // }
  render() {
    let mockData = {  "company": {
                        "name": "NASA",
                        "position": "Moon Image from NASA API"
                      },
                      "description": "Moon",
                    }
    let cards = []
    for (let i = 0; i < 5; i++) {
      cards.push(<Card spec={mockData}/>)
    }

    return (
        <div id="experienceContainer">
          {/* <h1>HI IM JIAXI</h1> */}
          {cards}
        </div>
    );
  }
}

export default CardContainer;