export default function Register() {
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className=" mt-[12px] divide-y divide-blue-200">
                        <div><h2 className="mb-6 text-left font-semibold text-gray-900">Sign up and start learning</h2></div>
                    </div>
                    <form className="mt-[12px] space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>

                                <label htmlFor="Name" className="sr-only">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-18 w-18 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Name
                                </label>
                                <input id="Name" name="Name" type="Name" required
                                    className="appearance-none border-solid border-current rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 xl:text-xl"
                                    placeholder="Name" />
                            </div>
                            <div>

                                <label htmlFor="email-address" className="sr-only">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-18 w-18 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Email address
                                </label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required
                                    className="appearance-none mt-3 border-solid border-current rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 xl:text-xl"
                                    placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Password
                                </label>
                                <input id="password" name="password" type="password" autoComplete="current-password" required
                                    className="appearance-none border-solid border-current mt-[12px] rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 xl:text-xl"
                                    placeholder="Password" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-4 border-indigo-500/100 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> I would like to receive special offers, personalized recommendations and learningtips </label>
                        </div>
                        <div>
                            <div className="submit-all flex justify-center font-black   ">
                                <button type="submit"
                                    className="group relative py-4 w-full flex justify-center px-4 border border-transparent text-sm font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    <p className="font-black">Register</p>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className=" mt-[12px] divide-y divide-blue-200">
                        <div><h2 className="mb-6 text-center text-sm font-normal text-gray-900">By signing up, you agree to our Terms of Service and Privacy<h2 className="underline">Policy .</h2></h2></div>
                        <div>
                            <h2 className="mt-6 text-center text-sm font-normal text-gray-900">Already have an account ? <a href="#" className=" font-bold underline text-blue-800 hover:text-blue-900"> To log in </a></h2>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}


