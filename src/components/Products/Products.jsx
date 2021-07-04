import React from 'react';
import { Grid } from '@material-ui/core';

import Product from '../Product/Product';

const productList = [
  {
    id: 1,
    name: 'Necklace',
    descriptions: 'running shoes',
    price: '200',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/N73509_BG_2000x.jpg?v=1597839463'
  },
  {
    id: 2,
    name: 'Bangle',
    descriptions: 'Apple Macbook',
    price: '250',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/B71797GLDPKR092017_2000x.jpg?v=1520411872'
  },
  {
    id: 2,
    name: 'Earrings',
    descriptions: '24 C',
    price: '2600',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/6342EGLDPP850_2000x.jpg?v=1487326288'
  },
  {
    id: 2,
    name: 'Rings',
    descriptions: '24 C',
    price: '2600',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/R80342_28253208-4e5b-4fe5-8c80-8385185445d2_2000x.jpg?v=1548666601'
  },
  {
    id: 2,
    name: 'Accessories',
    descriptions: '24 C',
    price: '2600',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/KB71867GLDPJ092017_2000x.jpg?v=1520945772'
  },
  {
    id: 2,
    name: 'All Combos',
    descriptions: '24 C',
    price: '2600',
    images: 'https://cdn.shopify.com/s/files/1/1587/9445/products/414CB2100.jpg'
  },
  {
    id: 2,
    name: "Men's Rings",
    descriptions: '24 C',
    price: '2600',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/444CB2050_2000x.jpg?v=1487404051'
  },
  {
    id: 2,
    name: 'Pendant Set',
    descriptions: '24 C',
    price: '2600',
    images:
      'https://cdn.shopify.com/s/files/1/1587/9445/products/PS71487CZF850_2000x.jpg?v=1487341956'
  }
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {productList.map(productItem => (
          <Grid item key={productItem.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={productItem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
