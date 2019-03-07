import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './elements/Product';

class Products extends Component {
  render() {

    const loggedInUser = localStorage.getItem('user'); // AMBIL PADA LOCALSTORAGE Key User

    if (!loggedInUser) {
      return <h1>Silahkan Login</h1>
    }
    const products = [
      {
        id: 1,
        slug: "iphone",
        name: "Iphone x",
        harga: 2000000
      },
      {
        id: 2,
        slug: "samsung",
        name: "Samsung x",
        harga: 1500000
      },
      {
        id: 3,
        slug: "oppo",
        name: "Oppo x",
        harga: 1000000
      }
    ]

    const { match } = this.props;
    console.log(match);
    const url = match.url;
    console.log(url);

    const result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.harga}
          </li>
        </NavLink>
      )
    })

    const { location } = this.props;
    console.log(location);


    
    return (
      <div className="container">
        <h1>Products</h1>
        
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>

        
        <div className="row">
          <Route path="/products/:name" component={Product}  />
        </div>
        
      </div>
    );
  }
}

export default Products;
