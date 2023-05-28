import React from 'react';

import { Card } from './card/card';
import { SliderLayout } from './sliderLayout';
import { PRODUCTS } from '../../../utils/products';

const [product] = PRODUCTS;

export const Slider = () => {
  return (
    <SliderLayout
      card={
        <Card
          description={product.description}
          price={product.price}
          title={product.name}
        />
      }
    />
  );
};
