import React from "react";
import "./ProductCard.css";
const ProductCard = ({ name, imageSrc, price, rating, description }) => {
  return (
      
    <div class="container">
   
      <div
        style={{ backgroundImage: `url(${imageSrc})` }}
        class="product-img"
      ></div>

      <div class="product-desc">
        <h1>{name}</h1>
        <h2>{price}</h2>
        <p>{description}</p>
        <p>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-alt"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          &nbsp;({rating})
        </p>

        <button>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
