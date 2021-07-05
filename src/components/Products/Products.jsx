import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product";

const URL =
  "https://api.airtable.com/v0/appZMUOKDaPymOc6w/products?api_key=keyPPTmvOpAtkL49Q";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = fetch(URL)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setProducts(response.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((productItem) => (
          <Grid item key={productItem.id} xs={12} sm={6} md={4} lg={3}>
            <Product productData={productItem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
