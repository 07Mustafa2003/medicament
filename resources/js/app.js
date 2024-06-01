import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderLayout from './HeaderLayout.jsx';
import Products from './components/Products.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<ProductDetail />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </Router>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
