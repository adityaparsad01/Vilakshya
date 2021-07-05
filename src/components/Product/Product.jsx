import React,{useState} from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import { AddShoppingCard } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ productData }) => {
  const classes = useStyles();


  const productList = productData.fields

  const image = (productList.Attachments)
  const productImg = []
  image.map((item,idx)=>{
    productImg.push(item.url)
  })

  console.log(productList)

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={productImg}
          title={productList.Name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography className={classes.title} variant="body2" gutterBottom align={"left"}>
              {productList.Name}
            </Typography>
          </div>
          <div display="flex"  className={classes.price}>
          <Typography  variant="h3"  align={"center"}>
              <span>₹</span>{productList.price}
            </Typography>
            <Typography  variant="h6"  align={"center"} className={classes.mainprice}>
            <span>₹</span>{productList.mainprice}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
