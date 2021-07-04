import React from 'react';
import Grid from '@material-ui/core';

import Product from './Product/Product';

const Product = [
  { id: 1, name: 'shoes', descriptions: 'running shoes', price: '200' },
  { id: 2, name: 'Macbook', descriptions: 'Apple Macbook', price: '250' }
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {Product.map(item => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={item} />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
