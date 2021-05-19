import React,{useContext} from "react";
import "./ProductCard.css"
import ProductContext from "../../ProductContext";
function ProductCard() {
   const ProductInfo = useContext(ProductContext);
   console.log({ProductInfo})
   

  return (
    <div className="container">
      {ProductInfo.ProductInfo.map((product) => {
        return (
         
            <div className="product-card">
              <div class="product-tumb">
                <img src={product.imageSrc} alt="" />
              </div>

              <div class="product-details">
                <span class="product-catagory">{product.category}</span>
                <h4>
                  <a href="">{product.name}</a>
                </h4>
                <p>{product.description}</p>

                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>$96.00</small>
                    {product.price}
                  </div>
                  <div class="product-links">
                    <a href="">
                      <i class="fa fa-heart"></i>
                    </a>
                    <a href="">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
         
        );
      })}
    </div>
  );
}

export default ProductCard;

