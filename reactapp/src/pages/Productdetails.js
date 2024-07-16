import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const Productdetails = () => {
  const { id } = useParams();
  

  return (
    <Container>
      <Box >
        <Typography variant="h3">Product Name</Typography>
        <Typography variant="body1">Company: Company Name</Typography>
        <Typography variant="body1">Category: Category Name</Typography>
        <Typography variant="body1">Price: $Price</Typography>
        <Typography variant="body1">Rating: Rating</Typography>
        <Typography variant="body1">Discount: Discount%</Typography>
        <Typography variant="body1">Availability: Availability</Typography>
      </Box>
    </Container>
  );
};

export default Productdetails;
