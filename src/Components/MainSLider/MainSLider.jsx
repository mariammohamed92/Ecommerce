import React from 'react'
import Slider from "react-slick";
import slider4 from '../../images/sliders/slider-2.jpeg'
import slider1 from '../../images/sliders/slider-image-1.jpeg'
import slider2 from '../../images/sliders/slider-image-2.jpeg'
import slider3 from '../../images/sliders/slider-image-3.jpeg'



export default function MainSLider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <>
            <Slider {...settings} className=' mt-1'>
            <img src={slider4} alt="" />
            <img src={slider1} className=' w-100 slider1' alt="" />
            <img src={slider2} className=' w-100 slider1' alt="" />
            <img src={slider3} className='w-100 slider1' alt="" />
            </Slider>
        </>
    )
}
