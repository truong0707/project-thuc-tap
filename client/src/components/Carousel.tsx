import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from "react-router-dom";

interface propsCarosel {
  onClick: any
}

interface data {
  _id: number
  imgCourses: string,
  nameCourses: string,
  descriptionCourses: string,
}

function SampleNextArrow(props: propsCarosel) {
  const { onClick } = props;

  return (
    <div className="bg-[#000] w-[40px] h-[40px] cursor-pointer rounded-[50%] absolute -right-[20px] top-[30%]" onClick={onClick} ></div>
  );
}

function SamplePrevArrow(props: propsCarosel) {
  const { /* className, style, */ onClick } = props;
  return (
    <div onClick={onClick} className='bg-[#000] w-[40px] h-[40px] cursor-pointer rounded-[50%] absolute -left-[20px] top-[30%] z-[5] text-[#fff]'></div>
  );
}

export default function Carousel() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/products-courses`).then(data => setProduct(data.data['productCourses']))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow onClick={undefined} />,
    prevArrow: <SamplePrevArrow onClick={undefined} />
  };

  return (
    <div>
      <Slider {...settings} className="w-[100%]" >
        {product.map((data: data) => (
          <Link to={`/detail-product/${data._id}`}>
            <div style={{width:'233px' , cursor: 'pointer'}} className="">
              <p><img src={data.imgCourses} alt="" /></p>
              <p><b>{data.nameCourses}</b></p>
              <p>{data.descriptionCourses}</p>
              <p>??dfasdasdasd</p>
            </div>
          </Link>

        ))}
      </Slider>

    </div>


  );
}