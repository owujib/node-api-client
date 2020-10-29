import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Post from './components/Post';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

class App extends React.Component {
  state = {
    posts: [],
    err: {},
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => this.setState({ err }));
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route
          path="/posts"
          render={(routerProps) => (
            <Post {...routerProps} posts={this.state.posts} />
          )}
        />
        <Route path="/create/post" component={PostForm} />
        <Route path="/post/:id" component={PostList} />
      </div>
    );
  }
}

export default App;
