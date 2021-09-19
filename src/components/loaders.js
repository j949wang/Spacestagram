import React, { Component } from "react"
import { Spinner } from "react-bootstrap"

class Loaders extends Component {
  render() {
    let loaders = []
    for (let i = 0; i < mockData.length; i++) {
      // console.log(this.state.data[i])
      loaders.push(<Spinner animation="border" variant="light"/>)
    }


    return(
      {loaders}
    )
  
  }
}
export default Loaders