import React from 'react';

import { Card } from './card/card';
import { SliderLayout } from './sliderLayout';

export const Slider = () => {
  return (
    <SliderLayout
      card={
        <Card
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, officia facilis. Quia, magni possimus! Officia facere debitis, facilis voluptates magnam autem consequuntur non nobis? Dolores blanditiis reprehenderit aut assumenda tempora?"
          price="100"
          title="Title1"
        />
      }
    />
  );
};
