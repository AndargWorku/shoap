import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";
import Products from "./component/Products";
import { Routes, Route } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css'"

function App() {
  return (
    <>
      <Navbar />
      
      
      
      
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Product' element={<Product/>}/>
        <Route exact path='/Product/:id' element={<Products/>}/>
      </Routes>
      
       
    
    </>
  );
}

export default App;
