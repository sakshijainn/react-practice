import React,{useContext} from 'react'
import "./Header.css"
import ProductContext from "../../ProductContext"

function Header() {
  const productDesc = useContext(ProductContext);
  console.log(productDesc.lengthOfProducts)
 
    return (
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            FanifyFriends
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          <a href="" >Products({productDesc.lengthOfProducts})</a>
          
        </div>
      </div>
    )
}

export default Header
