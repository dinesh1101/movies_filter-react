import React, { Component } from "react";

class Like extends Component {
  state = {};
  render() {
    let liking = "fa fa-heart";
    if (!this.props.liked) liking += "-o";
    return (
      <i
        className={liking}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={this.props.likeClick}
      ></i>
    );
  }
}

export default Like;
