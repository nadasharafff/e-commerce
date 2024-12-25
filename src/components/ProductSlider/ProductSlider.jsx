import React from 'react'
import Slider from 'react-slick';

export default function ProductSlider( { images } ) {
  

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return <>

    
<Slider {...settings}>
{images?.map((img, index) => {
    return  <img className="h-full w-full rounded-md object-contain max-w-lg mx-auto" key={index} src={img} alt="Nike Air"/>

})}
   </Slider>
 
  </>
}
