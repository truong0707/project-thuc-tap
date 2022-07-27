import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface data {
    nameCourses: any
}

export default function Detail() {
    // get params = id sp
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product-course/products_by_id?id=${pathId}`).then(data => setProduct(data.data.productDetail))
    }, [pathId]);

    return (
        <div className='all-detail'>

            {
                product.map((data:data) => (
                    <p>
                        {data.nameCourses}
                    </p>
                ))
            }


            <div className='max-w-[1349px] bg-[#000] p-[32px] max-h-[300px]'>
                <div className='flex max-w-[1000px] m-auto text-[#fff] justify-between'>
                    <div className='w-[60%] '>
                        <p className='text-[30px] font-bold'>Learn Python: The Complete Python Programming Course</p>
                        <p>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
                        <p>4.4 (2,812 ratings)17,058 students</p>
                        <p>Created by Avinash Jain, The Codex </p>
                    </div>

                    <div className='w-[35%]'>
                        <div className="card h-[500px]">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='max-w-[1349px] bg-[#fff]'>
                <div className='max-w-[1184px] m-auto p-[32px]'>
                    <div className='w-[59%] border border-indigo-600 p-[24px]'>
                        <p className='font-bold text-[24px]'>What you'll learn</p>
                        <p>Create their own Python Programs</p>
                        <p>Parse the Web and Create their own Games</p>
                    </div>
                </div>

                <div className='max-w-[1184px] m-auto p-[32px] pt-0'>
                    <p className='font-bold text-[24px]'>Course content</p>
                    <ul>
                        <li>15 sections • 146 lectures • 14h 42m total length</li>
                        <li>15 sections • 146 lectures • 14h 42m total length</li>
                    </ul>
                </div>

                <div className='max-w-[1184px] m-auto p-[32px]'>
                    <div className='w-[59%] border border-indigo-600 p-[24px]'>
                        <p className='font-bold text-[24px]'>What you'll learn</p>
                        <p>Create their own Python Programs</p>
                        <p>Parse the Web and Create their own Games</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
