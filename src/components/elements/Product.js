import React, { Component } from 'react';

class Product extends Component {
  render() {


    const { match } = this.props;
    console.log(match);
    const name = match.params.name; // INI DI AMBIL DARI params: name: "", LIHAT DI CONSOLE

    return (
     <div>
     <h1>{name}</h1>
     </div>
    );
  }
}

export default Product;
