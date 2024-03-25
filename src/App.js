import React from "react";
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Login from "./login/Login";
import Auth from "./signup/Auth";
import Register from "./signup/Register";
import Home from "./home/Home";
import Account from "./account/Account";
import Products from "./product/Products";
import ProductPage from "./product/ProductPage";
import Favorite from "./favorite/Favorite";
import Bag from "./bag/Bag";
import Missing from "./missing/Missing";

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/signup" element={ <Auth /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/home" element={ <Home /> } />
          <Route path="/account" element={ <Account /> } />
          <Route path="/home/products" element={ <Products /> } />
          <Route path="/home/products/:id" element={ <ProductPage /> } />
          <Route path="/favorite" element={ <Favorite /> } />
          <Route path="/bag" element={ <Bag /> } />
          <Route path="/*" element={ <Missing /> } />
        </Routes>
      </DataProvider>
    </div>

  );
}

export default App;
