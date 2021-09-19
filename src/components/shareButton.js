import React, { Component } from "react";
import { AiOutlineShareAlt } from "react-icons/ai"

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shared: false,
      index: this.props.buttonIndex
    }
    this.sharedPicture = this.sharedPicture.bind(this);
  }

  sharedPicture(props) {
    if (!this.state.shared) {
      this.setState({
        shared: true
      })
    } else {
      this.setState({
        shared: false
      })
    }
    console.log(`share link: ${this.props.shareLink}`)
    navigator.clipboard.writeText(this.props.shareLink)

    let elem = document.getElementsByClassName("sharePrompt")[this.state.index]
    let classes = elem.classList
    if (classes.contains("shared")) {
      classes.remove("shared")
    } else {
      classes.add("shared")
      setTimeout(() => {
        classes.remove("shared")
      }, 2000)
    }
  }


  render() {
    return(
      <div className="cardButtonFrame" onClick={this.sharedPicture}>
        <p className="shareButton">
           <AiOutlineShareAlt /> share 
        </p>
        <p className="sharePrompt">Image link copied to clipboard!</p>
      </div>
    )
  }
}

export default LikeButton