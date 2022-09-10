import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface data {
    nameCourses: string,
    imgCourses: string,
    PriceCourses: number
}

export default function Detail() {
    // get params = id sp
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/product-course/products_by_id?id=${pathId}`).then(data => setProduct(data.data.productDetail))
    }, [pathId]);

    console.log(product)

    return (
        <>
            {
                product.map((data: data) => (
                    <div className='all-detail'>
                        <div className='max-w-[1349px] bg-[#000] p-[32px] max-h-[300px]'>
                            <div className='flex max-w-[1100px] m-auto text-[#fff] justify-between'>
                                <div className='w-[60%] '>
                                    <p className='text-[30px] font-bold'>{data.nameCourses}</p>
                                    <p>Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</p>
                                    <p>4.4 (2,812 ratings)17,058 students</p>
                                    <p>Created by Avinash Jain, The Codex </p>
                                </div>

                                <div className='w-[32%] text-[#000]'>
                                    <div className="card  rounded-none">
                                        <img src={data.imgCourses} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-[30px] font-bold">{data.PriceCourses}$ US</h5>
                                            <p className="card-text text-[#D32D0F] font-bold">15 hours left at this price!</p>
                                            <p className="bg-[#a435f0] w-[100%] h-[48px] p-[12px] text-[#fff]  font-bold text-center mt-[8px]">Add to Cart</p>
                                            <p className="border border-[#000] w-[100%] h-[48px] p-[12px] font-bold text-center mt-[8px]">Buy Now</p>
                                            <p className='text-center mt-[10px]'>30-Day Money-Back Guarantee</p>

                                            <ul className='mt-[20px]'>
                                                <li><p className='font-bold'>This course includes:</p></li>
                                                <li><p className=''>9 articles</p></li>
                                                <li><p>4 downloadable resources</p></li>
                                                <li><p>Full lifetime access</p></li>
                                                <li><p>Access on mobile and TV</p></li>
                                                <li><p>Assignments</p></li>
                                                <li><p>Certificate of completion</p></li>
                                            </ul>
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
                                    <p>Comprendre le fonctionnement des objets Python en mémoire, afin de pouvoir optimiser son code</p>
                                    <p>Utiliser l'introspection afin de pouvoir analyser votre code pour le déboguer et le comprendre en profondeur</p>
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
                ))
            }
        </>
    )
}
