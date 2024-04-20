import React, { useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Login from "./login/Login";
import ForgotPassword from "./login/ForgotPassword";
import DataFetch from "./login/DataFetch";
import Auth from "./signup/Auth";
import Verification from "./signup/Verification";
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
import Generate from "./order/Generate";
import Placed from "./order/Placed";
import Track from "./order/Track";
import TrackOrder from "./order/TrackOrder";
import Missing from "./missing/Missing";

function ScrollToTop({ children }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}

function App() {
  // State to hold filterProducts, customerId, and totalAmount
  const [orderData, setOrderData] = useState(null);
  const [verificationCode, setVerificationCode] = useState(null);

  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<ScrollToTop><Login /></ScrollToTop>} />
          <Route path="/forgot-password" element={<ScrollToTop><ForgotPassword /></ScrollToTop>} />
          <Route path="/dataFetch" element={<ScrollToTop><DataFetch /></ScrollToTop>} />
          <Route path="/signup" element={<ScrollToTop><Auth setVerificationCode={setVerificationCode} /></ScrollToTop>} />
          <Route path="/verification" element={<ScrollToTop><Verification verificationCode={verificationCode} /></ScrollToTop>} />
          <Route path="/register" element={<ScrollToTop><Register /></ScrollToTop>} />
          
          <Route path="/home" element={<ScrollToTop><Home /></ScrollToTop>} />
          
          <Route path="/account" element={<ScrollToTop><Account /></ScrollToTop>} />
          
          <Route path="/home/products/all" element={<ScrollToTop><Products /></ScrollToTop>} />
          <Route path="/home/products/detail/:id" element={<ScrollToTop><ProductPage /></ScrollToTop>} />
          
          <Route path="/home/products/:cat" element={<ScrollToTop><ProductsCat /></ScrollToTop>} />
          <Route path="/home/products/:cat/detail/:id" element={<ScrollToTop><ProductPageCat /></ScrollToTop>} />
          
          <Route path="/favorite" element={<ScrollToTop><Favorite /></ScrollToTop>} />
          <Route path="/favorite/:id" element={<ScrollToTop><ProductPageFav /></ScrollToTop>} />
          
          <Route path="/bag" element={<ScrollToTop><Bag setOrderData={setOrderData} /></ScrollToTop>} />
          <Route path="/bag/:id" element={<ScrollToTop><ProductPageBag /></ScrollToTop>} />
          
          <Route path="/order/generate" element={<ScrollToTop><Generate orderData={orderData}/></ScrollToTop>}></Route>
          <Route path="/order/placed" element={<ScrollToTop><Placed /></ScrollToTop>}></Route>

          <Route path="/order/track" element={<ScrollToTop><Track /></ScrollToTop>}></Route>
          <Route path="/order/track/:id" element={<ScrollToTop><TrackOrder /></ScrollToTop>}></Route>
          
          <Route path="/*" element={<ScrollToTop><Missing /></ScrollToTop>} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;