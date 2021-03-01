import React, { Component } from "react";

import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    title: "",
    content: "",
    id: "",
  };

  componentDidUpdate() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          title: response.data.title,
          content: response.data.body,
          id: response.data.id,
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id) {
      post = (
        <div className="FullPost">
          <h1>{this.state.title}</h1>
          <p>{this.state.content}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
