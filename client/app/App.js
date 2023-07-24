import React from 'react';
import LandingPage from './ChipComponents/LandingPage';
import SingleProduct from './ChipComponents/SingleProduct';

import { Routes, Route } from 'react-router-dom';
import FilterChips from './ChipComponents/FilterChips';
import CreateNewUser from './CreateNewUser/CreateNewUser';
import SuccessPage from './CreateNewUser/SuccessPage';
import CartPage from './cart/CartPage';

const App = () => {
  return (
    <Routes>
      <Route path="/allchips" element={<FilterChips />} />
      <Route path="/chips/:id" element={<SingleProduct />} />
      <Route path="/signup" element={<CreateNewUser />} />
      <Route path="/successPage" element={<SuccessPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default App;
