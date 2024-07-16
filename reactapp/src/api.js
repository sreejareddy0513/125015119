import axios from 'axios';

const api_url = 'http://20.244.56.144/test';

export const getproducts = async (company, category, minprice, maxprice, topn) => {
  
    const response = await axios.get(`${api_url}/companies/${company}/categories/${category}/products/top-${topn}?minPrice=${minprice}&maxPrice=${maxprice}`);
    return response.data;
  
  
};
