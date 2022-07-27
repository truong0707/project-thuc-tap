import React from 'react';
import Carousel from '../components/Carousel';

export default function HomePage() {
    return (
        <div className='all__home'>
            <div className='header__home relative'>
                <img className='w-full' src='https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/7869fd17-9599-4a5e-9b03-4748a3dae016.jpg' alt='' />
                <ul className='absolute w-[400px] min-h-[110px] p-[24px] bg-[#fff] top-[70px] left-[70px] box-content'>
                    <li><p className='font-bold text-[29px]'>Unlock the power of your people</p></li>
                    <li>Udemy Business is trusted by 10.5K+ companies</li>
                    <li>around the world. Find out what we can do for yours.</li>
                </ul>
            </div>

            {/*  */}
            <div className='p-7'>
                <h1 className='font-bold text-[35px]'>A broad selection of courses</h1>
                <p className='text-[19px]'>Choose from 185,000 online video courses with new additions published every month</p>
                <div></div>

                <ul className='flex mt-[10px]'>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Python</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Excel</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Web development</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Javascript</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Data Science</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>AWS Certification</li>
                    <li className='min-w-[60px] mr-[22px] font-bold'>Drawing</li>
                </ul>

                <div className='border border-indigo-600 mt-[12px] p-[30px]'>
                    <div className='max-w-[800px]'>
                        <h4 className='font-bold text-[24px]'>Build websites and applications with Web Development</h4>
                        <p>The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.</p>

                        <button className="w-[155.4px] h-[40px] mt-[20px] border border-[#000]">
                            <p className='font-bold text-[14.2px]'>Explore more topics</p>
                        </button>
                    </div>

                    <div className=' w-[100%] mt-[40px]'>
                        <Carousel />
                        {/* <Carousel2/> */}
                    </div>
                </div>

                {/*  */}
                <div className='mt-[50px]'>
                    <p>Students are viewing</p>
                    
                    <div className='w-[100%]'>
                        {/* <Carousel/> */}
                    </div>
                </div>

                {/* Top category */}
                <div className='max-w-[1308px] mt-[20px]'>
                    <h3 className='font-bold text-[24px] mb-[25px]'>Top categories</h3>

                    <div>
                        <ul className='flex justify-between'>
                            <li className='w-[300px]' >
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' alt='' />
                                <p className='font-bold'>Design</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' alt='' />
                                <p className='font-bold'>Development</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' alt='' />
                                <p className='font-bold'>Marketing</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' alt='' />
                                <p className='font-bold'>IT and Software</p>
                            </li>
                        </ul>

                        <ul className='flex justify-between mt-[30px]'>
                            <li className='w-[300px]' >
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' alt='' />
                                <p className='font-bold'>Personal Development</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' alt='' />
                                <p className='font-bold'>Business</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' alt='' />
                                <p className='font-bold'>Photography</p>
                            </li>

                            <li className='w-[300px]'>
                                <img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' alt='' />
                                <p className='font-bold'>Music</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='w-[1349px] h-[470px] bg-[#F7F9FA] p-7'>
                <h1 className='font-bold text-[24px]'>Featured topics by category</h1>

                <ul className='flex'>
                    <li className='mt-[20px] w-[300px]'>
                        <p className='font-bold text-[19px]'>Development</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Python</p>
                        <p>35,753,402 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Web Development</p>
                        <p>11,155,938 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Machine Learning</p>
                        <p>6,976,910 students</p>
                    </li>

                    <li className='mt-[20px] w-[300px]'>
                        <p className='mb-[20px] font-bold text-[19px]'>Business</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Financial Analysis</p>
                        <p>1,190,745 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>SQL</p>
                        <p>5,784,294 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>PMP</p>
                        <p>1,697,201 students</p>

                    </li>

                    <li className='mt-[20px]'>
                        <p className='mb-[20px] w-[300px] font-bold text-[19px]'>IT and Software</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>AWS Certification</p>
                        <p>5,841,823 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Ethical Hacking</p>
                        <p>10,727,785 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Cyber Security</p>
                        <p>3,906,948 students</p>
                    </li>

                    <li className='mt-[20px]'>
                        <p className='mb-[20px] font-bold text-[19px]'>Design</p>

                        <p>Photoshop</p>
                        <p>10,734,980 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Graphic Design</p>
                        <p>10,734,980 students</p>

                        <p className='mt-[20px] text-[#401b9cf8] font-bold'>Drawing</p>
                        <p>2,434,590 students</p>
                    </li>
                </ul>

                <button className="w-[155.4px] h-[40px] mt-[20px] border border-[#000]">
                    <p className='font-bold text-[14.2px]'>Explore more topics</p>
                </button>
            </div>

            {/*  */}
            <div className='max-w-[1349px]  p-[50px]'>
                <div className='flex max-w-[896px] m-auto h-[400px]'>
                    <div className='w-[52%]'>
                        <img src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' alt='' />
                    </div>

                    <div className='w-[48%] mt-[80px]'>
                        <p>Become an instructor</p>
                        <p>Instructors from around the world teach millions of students on Udemy.
                            We provide the tools and skills to teach what you love.</p>

                        <button className="w-[155.4px] h-[40px] mt-[20px] border border-[#000]">
                            <p className='font-bold text-[14.2px]'>Explore more topics</p>
                        </button>


                    </div>
                </div>
            </div>

            {/*  */}
            <div className='max-w-[1349px] p-[24px] bg-[#F7F9FA]'>
                <div className='w-[613px] m-auto text-center'>
                    <p className='font-bold text-[24px] mb-[8px]'>Trusted by companies of all sizes</p>

                    <ul className='flex justify-center'>
                        <li>
                            <img src='https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg' alt='' />
                        </li>
                        <li>
                            <img src='https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg' alt='' />
                        </li>
                        <li>
                            <img src='https://s.udemycdn.com/partner-logos/v4/box-dark.svg' alt='' />
                        </li>
                        <li>
                            <img src='https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg' alt='' />
                        </li>

                        <li>
                            <img src='https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg' alt='' />
                        </li>
                    </ul>
                </div>
            </div>

            {/*  */}
            <div className='max-w-[1349px]  p-[50px]'>
                <div className='flex max-w-[896px] m-auto h-[400px]'>
                    <div className='w-[48%] mt-[100px]'>
                        <img className='w-[270px]' src='https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg' alt='' />
                        <p>Instructors from around the world teach millions of students on Udemy.
                            We provide the tools and skills to teach what you love.</p>

                        <button className="w-[155.4px] h-[40px] mt-[20px] border border-[#000]">
                            <p className='font-bold text-[14.2px]'>Explore more topics</p>
                        </button>
                    </div>

                    <div className='w-[52%]'>
                        <img src='https://s.udemycdn.com/home/non-student-cta/ub-1x-v3.jpg' alt='' />
                    </div>
                </div>
            </div>

            {/*  */}
            <div className='max-w-[1349px]  p-[50px]'>
                <div className='flex max-w-[896px] m-auto h-[400px]'>
                    <div className='w-[52%]'>
                        <img src='https://s.udemycdn.com/home/non-student-cta/transform-1x-v3.jpg' alt='' />
                    </div>

                    <div className='w-[48%] mt-[80px]'>
                        <p>Become an instructor</p>
                        <p>Instructors from around the world teach millions of students on Udemy.
                            We provide the tools and skills to teach what you love.</p>

                        <button className="w-[155.4px] h-[40px] mt-[20px] border border-[#000]">
                            <p className='font-bold text-[14.2px]'>Explore more topics</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
