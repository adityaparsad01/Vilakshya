import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton
} from '@material-ui/core';
import { AddShoppingCard } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.images}
          title={product.name}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Product;
