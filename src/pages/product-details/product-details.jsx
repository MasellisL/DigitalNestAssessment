import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/products';
import Card from '../../components/card/card-component';
import BackButton from '../../components/back-button/back-button-component';
import './product-details.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!product) return <p>Product not found.</p>;

  return (
    <section className="productDetailPage">
        <BackButton></BackButton>
        <Card> 
        <div className="productDetailContainer">
          <img className="productDetailImage"src={product.image} alt={product.name} />
          <div className="productDetailInfo">
            <h1 className="productDetailTitle">{product.name}</h1>
            <p className="prudctDetailDesc">{product.description}</p>
            <h2 className="productDetailPrice">${product.price}</h2>
          </div>
        </div>
        </Card>
    </section>
  );
};

export default ProductDetails;
