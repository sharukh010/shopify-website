import React from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";
import Category from "./pages/Category";
import AboutUs from "./pages/AboutUs";
import NavbarSimple from "./components/Navigation";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <NavbarSimple />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/category/:category" element={<Category/>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
