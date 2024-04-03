import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Login from "./login/Login";
import Auth from "./signup/Auth";
import Register from "./signup/Register";
import Home from "./home/Home";
import Account from "./account/Account";
import Products from "./product/Products";
import ProductsCat from "./product/ProductsCat";
import ProductPage from "./product/ProductPage";
import ProductPageCat from "./product/ProductPageCat";
import Favorite from "./favorite/Favorite";
import ProductPageFav from "./favorite/ProductPageFav";
import Bag from "./bag/Bag";
import ProductPageBag from "./bag/ProductPageBag";
import Missing from "./missing/Missing";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<ScrollToTop><Login /></ScrollToTop>} />
          <Route path="/signup" element={<ScrollToTop><Auth /></ScrollToTop>} />
          <Route path="/register" element={<ScrollToTop><Register /></ScrollToTop>} />
          <Route path="/home" element={<ScrollToTop><Home /></ScrollToTop>} />
          <Route path="/account" element={<ScrollToTop><Account /></ScrollToTop>} />
          <Route path="/home/products/all" element={<ScrollToTop><Products /></ScrollToTop>} />
          <Route path="/home/products/detail/:id" element={<ScrollToTop><ProductPage /></ScrollToTop>} />
          <Route path="/home/products/:cat" element={<ScrollToTop><ProductsCat /></ScrollToTop>} />
          <Route path="/home/products/:cat/detail/:id" element={<ScrollToTop><ProductPageCat /></ScrollToTop>} />
          <Route path="/favorite" element={<ScrollToTop><Favorite /></ScrollToTop>} />
          <Route path="/favorite/:id" element={<ScrollToTop><ProductPageFav /></ScrollToTop>} />
          <Route path="/bag" element={<ScrollToTop><Bag /></ScrollToTop>} />
          <Route path="/bag/:id" element={<ScrollToTop><ProductPageBag /></ScrollToTop>} />
          <Route path="/*" element={<ScrollToTop><Missing /></ScrollToTop>} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;