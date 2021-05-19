import logo from './logo.svg';
import './App.css';

import ProductCard from './components/ProductCard/ProductCard';

import Header from './components/Header/Header';
import {ProductProvider} from "./ProductContext";

function App() {
  return (
    <div className="App">
    
    <ProductProvider>
    <Header/>
        <ProductCard/>
    </ProductProvider>
    
    </div>
  );
}

export default App;
