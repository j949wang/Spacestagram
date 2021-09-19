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

  sharedPicture() {
    if (!this.state.shared) {
      this.setState({
        share: true
      })
    } else {
      this.setState({
        share: false
      })
    }

    let elem = document.getElementsByClassName("shareButton")[this.state.index]
    let classes = elem.classList
    if (classes.contains("shared")) {
      classes.remove("shared")
    } else {
      elem.classList.add("shared")
    }
  }


  render() {
    return(
      <div className="cardButtonFrame" onClick={this.likedPicture}>
        <p className="shareButton">
          {this.state.shared ? `You `: null}
          {this.state.shared ? <AiOutlineShareAlt className="heartIcon"/> : <AiOutlineShareAlt />} share 
        </p>
        {this.state.shared ? <p className="likePrompt">Click to undo</p> : null}
        
      </div>
    )
  }
}

export default LikeButton