import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import axios from 'axios'
import { baseUrl } from '../Utilities/BaseUrl'

export default function CategorySlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay:true
  };

  const [categories, setCategories] = useState([])

  let getAllCategories = async () => {
    let { data } = await axios.get(`${baseUrl}/categories`)
    // console.log(data.data);
    setCategories(data.data)
  }

  useEffect(() => {
    getAllCategories();
  }, [])


  return (
    <>
      <div className="my-5 container">
        <h3 className=' fw-bold'>Shop Popular Categories</h3>
        <Slider {...settings} autoplaySpeed={3000}>
          {categories.map((category) => (
            <div key={category._id}>
              <img src={category.image} className='w-100' height={200} alt="" />
              <h6>{category.name}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
