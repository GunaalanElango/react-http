import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: "",
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 6);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "GunaalanElango",
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  postSelectable = (postId) => {
    this.setState({ selectedPostId: postId });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Post
          clicked={() => this.postSelectable(post.id)}
          title={post.title}
          key={post.id}
          author={post.author}
        />
      );
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
