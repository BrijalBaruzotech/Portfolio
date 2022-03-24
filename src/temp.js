import React from "react";
import Slider from "react-slick";


export default function temp() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
          <div>
            <h1>4</h1>
          </div>
          <div>
            <h1>5</h1>
          </div>
          <div>
            <h1>6</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
}