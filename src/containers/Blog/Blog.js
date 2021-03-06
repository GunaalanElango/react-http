import React, { Component, Suspense } from "react";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "../Posts/Posts";
// import NewPost from "../NewPost/NewPost";

const NewPost = React.lazy(() => import("../NewPost/NewPost"));

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: "red" }}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/new-posts" }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route
            path="/new-posts"
            exact
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <NewPost />
              </Suspense>
            )}
          /> */}
          <Route path="/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
