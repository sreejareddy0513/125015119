import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import ProductCard from '../components/Productcard';
import Filter from '../components/Filter';
import { getProducts } from '../api';

const Allproducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    topN: 10,
  });

  const fetchProducts = async () => {
    const data = await getProducts(filters.company, filters.category, filters.minPrice, filters.maxPrice, filters.topN);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} fetchProducts={fetchProducts} />
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Allproducts;
