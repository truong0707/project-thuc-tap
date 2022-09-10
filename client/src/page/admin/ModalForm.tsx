import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface MyProps {
    handelCloseModelForm: any;
    openModelForm: any;
}

export default function ModalForm(props: MyProps) {
    const handelCloseModelForm = props.handelCloseModelForm;

    const [inputs, setInputs] = useState({
        name: "",
        price: "",
        image: "",
        decription: "",
        vote: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameInput = e.target.name;
        let valueInput = e.target.value;

        setInputs(state => ({ ...state, [nameInput]: valueInput }));
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/api/v1/products-courses`, {
            nameCourses: inputs.name,
            imgCourses: inputs.image,
            descriptionCourses: inputs.decription,
            PriceCourses: parseInt(inputs.price),
            voteCourses: parseInt(inputs.vote),
        }).then(data => console.log(data))

        // đóng tab
        handelCloseModelForm(false);
    }



    return (
        <>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity  "></div>

                <div className=" fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="p-[50px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            {/* fom */}
                            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Name Courses
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Javascript"
                                            onChange={handleChange}
                                            name='name' />
                                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Price Courses
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Price"
                                            name='price'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Link image Courses
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="image"
                                            name='image'
                                            onChange={handleChange}
                                        />
                                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Decription
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="decription"
                                            name='decription'
                                            onChange={handleChange}
                                        />
                                        <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                            vote Courses
                                        </label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="vote"
                                            name='vote'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                                                    State
                                                </label>
                                                <div className="relative">
                                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        <option>New Mexico</option>
                                                        <option>Missouri</option>
                                                        <option>Texas</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                                                    Zip
                                                </label>
                                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
                                            </div> */}
                                </div>



                                <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-0 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={handelCloseModelForm}
                                >
                                    Cancel
                                </button>

                                <button type="submit" className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" >
                                    Create Courses
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
