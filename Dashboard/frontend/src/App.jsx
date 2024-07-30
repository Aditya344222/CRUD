import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Footer from "./footer";
import SignUp from "./signUp";
import PrivateComponent from "./privateComponent";
import Login from "./Login";
import AddProduct from "./AddProduct";
import Products from "./products";
import UpdateProduct from "./Update";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Products />} />
            <Route path="/Add" element={<AddProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
            <Route
              path="/Logout"
              element={<h1>Product Logout components</h1>}
            />
            <Route
              path="/profile"
              element={<h1>Product profile components</h1>}
            />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route
            path="/signup"
            element={
              <h1>
                <SignUp />
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
