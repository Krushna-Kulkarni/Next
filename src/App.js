import "./App.css";
import React from "react"; 
import {Routes, Route} from "react-router-dom"
import MockMan from "mockman-js";
import { Home } from "./pages/Home";
import { ProductListing } from "./pages/ProductListing";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/products" element={<ProductListing/>} />
      <Route path="/mockman" element={<MockMan/>} />
      </Routes>
 
    </div>
  );
}

export default App;
