import React from 'react'
import CategorySlider from '../CategorySlider/CategorySlider';
import MainSLider from '../MainSLider/MainSLider';
import Products from '../Products/Products';

export default function HomePage() {
  return (
    <>
      <MainSLider/>
      <CategorySlider/>
      <Products/>
    </>
  )
}
