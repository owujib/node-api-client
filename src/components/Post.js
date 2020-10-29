import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.map((post) => {
      return (
        <div key={post.id} className="bg-light">
          <h4>
            <Link to={'/post/' + post.id}>{post.title}</Link>
          </h4>
          <p>{post.body}</p>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <h4 className="text-center text-secondary m-3 p-2">Posts</h4>
        <div className="container-fluid">{postList}</div>
      </div>
    );
  }
}

export default Post;
