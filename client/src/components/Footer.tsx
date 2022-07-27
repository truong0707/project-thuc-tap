import React from 'react'

export default function Footer() {
    return (
        <div className='footer max-w-[1349px] min-h-[293px] bg-black p-[26px]'>
            <ul className='text-[#fff] flex max-w-[1240px] justify-between m-auto'>
                <li>
                    <p>Udemy Business</p>
                    <p>Teach on Udemy</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>

                    <img className='w-[30%] mt-[50px]' src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' alt='' />
                </li>

                <li>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Support</p>
                    <p>Affiate</p>
                    <p>Investors</p>
                </li>

                <li>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookie settings</p>
                    <p>Sitemap</p>
                    <p>Acccessibility statement</p>
                </li>

                <li className='w-[25%]'></li>
                <li className=''>
                    <button className="w-[155.4px] h-[40px] border border-[#000]">
                        <p className='font-bold text-[15px]'>English</p>
                    </button>
                </li>
            </ul>
            <p className=''>© 2022 Udemy, Inc.</p>

        </div>
    )
}
