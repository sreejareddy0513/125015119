import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Allproducts from './pages/Allproducts';
import Productdetail from './pages/Productdetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Allproducts />} />
        <Route path="/product/:id" element={<Productdetail />} />
      </Routes>
    </Router>
  );
}

export default App;
