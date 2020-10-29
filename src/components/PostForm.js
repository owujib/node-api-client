import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      body: this.state.body,
    };
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    this.setState({
      title: '',
      body: '',
    });
  };
  render() {
    return (
      <div className="container ">
        <h4>Post form</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="enter a title"
            />
          </FormGroup>
          <FormGroup>
            <textarea
              className="form-control"
              id="body"
              value={this.state.body}
              onChange={this.handleChange}
              rows="10"
            ></textarea>
          </FormGroup>
          <Button type="submit">create post</Button>
        </Form>
      </div>
    );
  }
}

export default PostForm;
