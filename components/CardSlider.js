
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function CardSlider(props) {
  const {model} = props;
  const {name, mrp, rrp, size} = model;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const getPhotosForColor = (color, numberOfPhotos) => {
      let content = [];
      for (let i = 1; i <= numberOfPhotos; i++) {
        content.push(<div className="text-center relative w-96 h-96">
          <img src={`https://luggage-models-ksa.s3.ap-south-1.amazonaws.com/images/${name}/${color}/${i}.png`} layout='fill' objectFit="contain" alt={name} className="center"/>
        </div>);
      }
      return content;
    };

    const getAllPhotos = (model) => {
      let colorData = model.colorData;
      let content = [];
      colorData.map((data) => {
        content.push(
            <div className="block mx-auto bg-white bg-opacity-70 rounded-3xl max-w-xs text-black my-8 border-solid border-4 border-black shadow-2xl">
              <h2 className="text-center text-3xl capitalize my-5 p-5">{name} {data.color}</h2>
              <Slider {...settings}>
                {getPhotosForColor(data.color, data.number)}
              </Slider>
            </div>
        )
      });
      return content;
    }
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        { getAllPhotos(model) }
      </div>   
    );
}