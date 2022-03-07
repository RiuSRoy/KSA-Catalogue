
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from 'next/image'

export default function CardSlider(props) {
  const {modelName} = props;
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
          <Image src={`/images/${modelName}/${color}/${i}.png`} layout='fill' objectFit="contain" alt={modelName}/>
        </div>);
      }
      return content;
    };

    const getAllPhotos = (model) => {
      let colorData = [];
      switch(model) {
        case "airconic" : 
        colorData = [
          {
            "color":"red", 
            "number": 7
          },
          {
            "color":"grey", 
            "number": 5
          },
          {
            "color":"black", 
            "number": 6
          }
        ];
        break;
        case "falcon": 
        colorData = [
          {
            "color":"blue", 
            "number": 6
          },
          {
            "color":"red", 
            "number": 6
          }
        ];
        break;
        case "kross": 
        colorData = [
          {
            "color":"spring green", 
            "number": 4
          },
          {
            "color":"formula red", 
            "number": 2
          },
          {
            "color":"dark slate", 
            "number": 4
          },
          {
            "color":"dark red", 
            "number": 4
          }
        ]
        break;
        case "majoris": 
        colorData = [
          {
            "color":"black", 
            "number": 6
          },
          {
            "color":"blue", 
            "number": 6
          },
          {
            "color":"coral", 
            "number": 6
          }
        ];
        break;
        case "zakk":
          colorData = [
            {
              "color":"coral blue", 
              "number": 3
            },
            {
              "color":"black", 
              "number": 8
            },
            {
              "color":"red", 
              "number": 7
            }
          ]
        default:
          getPhotosForColor("", 0);
      }
      let content = [];
      colorData.map((data) => {
        content.push(
            <div className="block mx-auto bg-white bg-opacity-70 rounded-3xl max-w-xs text-black my-8 border-solid border-4 border-black shadow-2xl">
              <h2 className="text-center text-3xl capitalize my-5 p-5">{modelName} {data.color}</h2>
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
        {getAllPhotos(modelName)}
      </div>   
    );
}