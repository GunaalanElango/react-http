import React, { Component } from "react";
import "./Blog.css";
import { Route, NavLink } from "react-router-dom";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    color: "red",
                    textDecoration: "underline",
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-posts",
                    search: "quick-submit=true",
                    hash: "#form",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts} />
        <Route path="/new-posts" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;
