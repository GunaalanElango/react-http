import React, { Component } from "react";
import axios from "../../axios";
import Post from "../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 6);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "GunaalanElango",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  postSelectable = (postId) => {
    this.setState({ selectedPostId: postId });
  };

  render() {
    let posts = null;

    if (this.state.error) {
      posts = <p>Something went wrong!</p>;
    } else {
      posts = this.state.posts.map((post) => {
        return (
          <Post
            clicked={() => this.postSelectable(post.id)}
            title={post.title}
            key={post.id}
            author={post.author}
          />
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
