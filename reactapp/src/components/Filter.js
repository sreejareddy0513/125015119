import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const Filter = ({ filters, setFilters, fetchproducts }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Box >
      <TextField label="Category" name="category" onChange={handleChange} />
      <TextField label="Company" name="company" onChange={handleChange} />
      <TextField label="Min Price" name="minPrice" type="number" onChange={handleChange} />
      <TextField label="Max Price" name="maxPrice" type="number" onChange={handleChange} />
      <Button variant="contained" onClick={fetchproducts}>Apply filters</Button>
    </Box>
  );
};

export default Filter;
