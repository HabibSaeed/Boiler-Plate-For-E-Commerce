import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Products from "./pages/Products";
import UserDashboard from "./pages/UserDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="vendor" element={<VendorDashboard />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="products" element={<Products />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
