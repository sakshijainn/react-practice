import React, { createContext } from 'react'
import ProductInfo from "./database/ProductInfo";
export const  ProductContext = createContext();

export const ProductProvider = (props)=>{
    const lengthOfProducts = Object.keys(ProductInfo).length;
    console.log(lengthOfProducts);
    

    return(
        <ProductContext.Provider value={{ProductInfo,lengthOfProducts}}>
          {props.children}
        </ProductContext.Provider>
    )

}
    


export default ProductContext
