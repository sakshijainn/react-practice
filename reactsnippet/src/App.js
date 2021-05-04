import logo from './logo.svg';
import './App.css';

import ProductCard from './components/ProductCard/ProductCard';

const ProductInfo ={
  name:" Kama Ayurveda  Hair Color Kit",
  imageSrc:"https://images-na.ssl-images-amazon.com/images/I/713w22QGLYL._SX522_.jpg",
  price:"₹ 1,275.00",
  rating:"483",
  description:"Made from Organic Indigo and Henna plants"
}

function App() {
  return (
    <div className="App">
    <h3>PRODUCT CARD</h3>
      <ProductCard name={ProductInfo.name} imageSrc={ProductInfo.imageSrc} price ={ProductInfo.price}
       rating={ProductInfo.rating} description={ProductInfo.description}/>
    </div>
  );
}

export default App;
