import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
  state = {
    post: {},
    err: {},
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axios
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) =>
        this.setState({
          post: response.data,
        })
      )
      .catch((err) => this.setState({ err }));
  }

  render() {
    const { post } = this.state;

    return (
      <div className="m-2">
        <h4 className="text-center">Post list</h4>
        <div className="container">
          <h4>{post.title}</h4>
          <p className="lead">{post.body}</p>
        </div>
      </div>
    );
  }
}

export default PostList;
