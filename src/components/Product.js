import React, { Component } from 'react';

import CardList from './CardList';

class Product extends Component {
  render() {
    const { products } = this.props;
    const productList = products.map((product, id) => {
      return (
        <div key={id} className="col-md-4 mb-2 mt-2">
          <CardList {...product} />
        </div>
      );
    });
    return (
      <div>
        <h4 className="text-center text-secondary m-3 p-2">Product</h4>
        <div className="container-fluid">
          <div className="row">{productList}</div>
        </div>
      </div>
    );
  }
}

export default Product;
