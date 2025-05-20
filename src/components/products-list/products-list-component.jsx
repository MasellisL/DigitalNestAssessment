import React, { useEffect, useState } from 'react';
import Card from '../card/card-component';
import { Link } from 'react-router-dom'
import { fetchProducts } from '../../api/products';
import './products-list.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => console.error(err))
  }, []);

  return (
    <div className="productContainer">
      {products.map(product => (
        <Card>
        <div key={product.id}>
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={product.image} alt={product.name}/>
          <h2 className="productTitle">{product.name}</h2>
          <p className="productPrice">${product.price}</p>
        </Link>
        </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
