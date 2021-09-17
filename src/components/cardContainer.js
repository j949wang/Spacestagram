import React, { Component } from "react";
import Card from "./card";
import mockData from "../config/mockData.json"


class CardContainer extends Component {
  // async componentDidMount() {
  //   // const apiKey = "ADOxAaPacqjeyA46jMLQcNnb3btfAM2hYldv2R6b"
  //   // const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  //   // const data = await response.json()
  //   // console.log(data)
  // }
  render() {
    // let mockData = {  "company": {
    //                     "name": "NASA",
    //                     "position": "Moon Image from NASA API"
    //                   },
    //                   "description": "Moon",
    //                 }
    let cards = []
    console.log(mockData)

    for (let i = 0; i < mockData.length; i++) {
      console.log(mockData[i])
      cards.push(<Card spec={mockData[i]}/>)
    }

    return (
        <div id="experienceContainer">
          {cards}
        </div>
    );
  }
}

export default CardContainer;