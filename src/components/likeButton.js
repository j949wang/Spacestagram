import React, { Component } from "react";
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'


class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      index: this.props.buttonIndex
    }
    this.likedPicture = this.likedPicture.bind(this);
  }

  likedPicture() {
    if (!this.state.liked) {
      this.setState({
        liked: true
      })
    } else {
      this.setState({
        liked: false
      })
    }

    let elem = document.getElementsByClassName("likeButton")[this.state.index]
    let prompts = document.getElementsByClassName("likePrompt")[this.state.index]
    let classes = elem.classList
    if (classes.contains("liked")) {
      classes.remove("liked")
      prompts.classList.remove("liked")
    } else {
      classes.add("liked")
      prompts.classList.add("liked")
    }
  }


  render() {
    return(
      <div className="cardButtonFrame" onClick={this.likedPicture}>
        <p className="likeButton">
          {this.state.liked ? `You `: null}
          {this.state.liked ? <AiFillHeart className="heartIcon"/> : <AiOutlineHeart />} this 
        </p>
        <p className="likePrompt">Click to undo</p>
        
      </div>
    )
  }
}

export default LikeButton