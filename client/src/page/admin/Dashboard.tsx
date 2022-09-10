import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ModalForm from './ModalForm';


interface MyProps {
    setOpenAdmin: any;
}

export default function Dashboard(props: MyProps) {
    const setOpenAdmin = props.setOpenAdmin;
    const [allCourses, setAllCourses] = useState([]);
    const [openModel, setOpenModel] = useState(false);
    const [getIdCourses, setgetIdCourses] = useState('');
    const [openModelForm, setOpenModelForm] = useState(false);

    useEffect(() => {
        setOpenAdmin(true);
    })

    /* call api get courses */
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/products-courses`).then(data => setAllCourses(data.data['productCourses']))
    }, [openModel, openModelForm]);


    const handleQSDeleteCourses = (id: any) => {
        setOpenModel(true);
        setgetIdCourses(id);
    }

    const handelOpenModelForm = () => {
        setOpenModelForm(true);
    }

    const handelCloseModelForm = () => {
        setOpenModelForm(false);
    }




    return (
        <>

            {openModelForm ? <ModalForm openModelForm={openModelForm} handelCloseModelForm={handelCloseModelForm} /> : null}

            {openModel ? <Modal getIdCourses={getIdCourses} setOpenModel={setOpenModel} /> : null}
            {!openModel ?
                <>
                    <nav
                        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
                    >
                        <div
                            className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
                        >
                            <button
                                className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                type="button"
                            /* onclick="toggleNavbar('example-collapse-sidebar')" */
                            >
                                <i className="fas fa-bars"></i>
                            </button>

                            <Link to={'/'}>
                                <a>Back</a>
                            </Link>

                            {/* note */}
                        </div>
                    </nav>
                </> : null}




            <div className="relative md:ml-64 bg-blueGray-50">
                <nav
                    className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
                >
                    <div
                        className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
                    >
                        <a
                            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                            href="./index.html"
                        >Dashboard</a
                        >
                        <form
                            className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
                        >
                            <div className="relative flex w-full flex-wrap items-stretch">
                                <span
                                    className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                                ><i className="fas fa-search"></i
                                ></span>
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                                />
                            </div>
                        </form>
                        <ul
                            className="flex-col md:flex-row list-none items-center hidden md:flex"
                        >
                            <a
                                className="text-blueGray-500 block"
                                href="#pablo"
                            // onclick="openDropdown(event,'user-dropdown')"
                            >
                                <div className="items-center flex">
                                    <span
                                        className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
                                    ><img
                                            alt="..."
                                            className="w-full rounded-full align-middle border-none shadow-lg"
                                            src="../../assets/img/team-1-800x800.jpg"
                                        /></span>
                                </div>
                            </a>
                            <div
                                className="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                id="user-dropdown"
                            >
                                <a
                                    href="#pablo"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >Action</a
                                ><a
                                    href="#pablo"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >Another action</a
                                ><a
                                    href="#pablo"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >Something else here</a
                                >
                                <div
                                    className="h-0 my-2 border border-solid border-blueGray-100"
                                ></div>
                                <a
                                    href="#pablo"
                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                                >Seprated link</a
                                >
                            </div>
                        </ul>
                    </div>
                </nav>


                {/* Header   */}
                <div className="relative bg-[#DEDEDE] md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                            {/* <!-- Card stats --> */}
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div
                                                    className="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        className="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                        Courses
                                                    </h5>
                                                    <span className="font-semibold text-xl text-blueGray-700">
                                                        50
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div
                                                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                                                    >
                                                        <i className="far fa-chart-bar"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-400 mt-4">
                                                <span className="text-emerald-500 mr-2">
                                                    <i className="fas fa-arrow-up"></i> {/* 3.48% */}
                                                </span>
                                                <span className="whitespace-nowrap">
                                                    Since last month
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div
                                                    className="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        className="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                        users
                                                    </h5>
                                                    <span className="font-semibold text-xl text-blueGray-700">
                                                        200
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div
                                                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                                                    >
                                                        <i className="fas fa-chart-pie"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-400 mt-4">
                                                <span className="text-red-500 mr-2">
                                                    <i className="fas fa-arrow-down"></i> {/* 3.48% */}
                                                </span>
                                                <span className="whitespace-nowrap"> Since last week </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div
                                                    className="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        className="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                       {/*  Sales */}
                                                    </h5>
                                                    <span className="font-semibold text-xl text-blueGray-700">
                                                     {/*    924 */}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div
                                                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                                                    >
                                                        <i className="fas fa-users"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-400 mt-4">
                                                <span className="text-orange-500 mr-2">
                                                    <i className="fas fa-arrow-down"></i> {/* 1.10% */}
                                                </span>
                                                <span className="whitespace-nowrap"> {/* Since yesterday */} </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                                    <div
                                        className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                                    >
                                        <div className="flex-auto p-4">
                                            <div className="flex flex-wrap">
                                                <div
                                                    className="relative w-full pr-4 max-w-full flex-grow flex-1"
                                                >
                                                    <h5
                                                        className="text-blueGray-400 uppercase font-bold text-xs"
                                                    >
                                                        {/* Performance */}
                                                    </h5>
                                                    <span className="font-semibold text-xl text-blueGray-700">
                                                        {/* 49,65% */}
                                                    </span>
                                                </div>
                                                <div className="relative w-auto pl-4 flex-initial">
                                                    <div
                                                        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"
                                                    >
                                                        <i className="fas fa-percent"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-blueGray-400 mt-4">
                                                <span className="text-emerald-500 mr-2">
                                                    <i className="fas fa-arrow-up"></i> {/* 12% */}
                                                </span>
                                                <span className="whitespace-nowrap">
                                                    {/* Since last month */}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
                            >
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div
                                            className="relative w-full px-4 max-w-full flex-grow flex-1"
                                        >
                                            <h3 className="font-semibold text-base text-blueGray-700">
                                                Courses
                                            </h3>
                                        </div>
                                        <div
                                            className="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
                                        >
                                            <button
                                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handelOpenModelForm}
                                            >
                                                Create new Courses
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    {/* <!-- Projects table --> */}
                                    <table
                                        className="items-center w-full bg-transparent border-collapse"
                                    >
                                        <thead>
                                            <tr>
                                                <th
                                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                                >
                                                    Name Courses
                                                </th>

                                                <th
                                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                                >
                                                    Name Courses
                                                </th>
                                                <th
                                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                                >
                                                    Price Courses
                                                </th>
                                                <th
                                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                                >
                                                    Create Courses
                                                </th>
                                                <th
                                                    className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                                >
                                                    Delete Courses
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allCourses.map((data: any) => (
                                                    <>
                                                        <tr>
                                                            <td
                                                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                            >
                                                                <img src={data.imgCourses} />
                                                            </td>
                                                            <th
                                                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                                                            >
                                                                {data.nameCourses}
                                                            </th>
                                                            <td
                                                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                            >
                                                                {data.PriceCourses}<b>$</b>
                                                            </td>
                                                            <td
                                                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                            >
                                                                <button
                                                                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                    type="button"
                                                                >
                                                                    Update
                                                                </button>
                                                            </td>
                                                            <td
                                                                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                                            >
                                                                <p
                                                                    className="bg-[red] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 cursor-pointer"
                                                                    onClick={() => handleQSDeleteCourses(data._id)}
                                                                >
                                                                    delete
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
