import React, { Component } from 'react';
import { Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import axios from 'axios';

class AddProduct extends Component {
  state = {
    name: '',
    description: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      description: this.state.description,
    };
    console.log(this.state);
    axios
      .post('http://localhost:4000/api/product/create-product', data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    this.setState({
      name: '',
      description: '',
    });
  };
  render() {
    return (
      <div className="container ">
        <h4>Post form</h4>
        <Form
          onSubmit={this.handleSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <FormGroup>
            <FormControl
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="enter a product name"
            />
          </FormGroup>

          <FormGroup>
            <textarea
              className="form-control"
              id="description"
              value={this.state.description}
              placeholder="enter a product description"
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

export default AddProduct;
