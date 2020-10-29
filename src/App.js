import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import AddProductImage from './components/AddProductImage';

class App extends React.Component {
  state = {
    products: [],
    err: {},
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/product/product-list')
      .then((response) => {
        this.setState({
          products: response.data.message,
        });
      })
      .catch((err) => this.setState({ err }));
  }

  render() {
    return (
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductList} />
        <Route
          path="/product"
          exact
          render={(routerProps) => (
            <Product {...routerProps} products={this.state.products} />
          )}
        />
        <Route path="/add/product" component={AddProduct} />
        <Route path="/:id/add/image" component={AddProductImage} />
      </div>
    );
  }
}

export default App;
