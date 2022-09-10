export default function Login() {
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full">
                    <div className=" mt-[12px] divide-y divide-blue-200">
                        <div><h2 className="mb-6 text-left font-semibold text-gray-900">Log in to your Udemy account!</h2></div>
                        <div>
                            <button type="submit" className="group relative w-full mt-[24px] flex justify-around py-2 px-4 border-2 border-gray-300 text-base font-semibold rounded-md text-black bg-gray-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg
                                        className="w-6 h-6 text-blue-600 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                        />
                                    </svg>
                                </span>
                                Continue with Facebook
                            </button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit" className="group relative w-full mt-[12px] flex justify-around py-2 px-4 border-2 border-gray-300 text-base font-semibold rounded-md text-black bg-gray-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-3 inset-y-0 text-blue-600 flex items-center pl-3">
                                    <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" bg-blue data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                                </span>
                                Continue with Google
                            </button>
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full mt-[12px] flex justify-around py-2 px-4 border-2 border-gray-300 text-base font-semibold rounded-md text-black bg-gray-50 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-3 inset-y-0 text-blue-600 flex items-center pl-3">
                                <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                </span>
                                Continue with Apple
                            </button>
                        </div>
                    </div>
                    <form className="mt-[12px] space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>

                                <label htmlFor="email-address" className="sr-only">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Email address
                                </label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required
                                    className="appearance-none border-solid border-current rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 xl:text-xl"
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
                        <div>
                            <div className="submit-all flex justify-center">
                                <button type="submit"
                                    className="group relative py-4 w-24 flex justify-center px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    </span>
                                    Login
                                </button>
                                <div className=" items-center ">

                                <p className="text-center py-4 justify-right text-sm text-gray-600">
                                    Or
                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> You forgot your password. </a>
                                </p>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div>

                        <h2 className="mt-6 text-center text-sm font-normal text-gray-900">You do not have an account ? <a href="#" className=" font-bold underline text-blue-800 hover:text-blue-900"> Register</a></h2>
                        <p className="mt-2 text-center text-sm">
                            <a href="#" className="font-bold text-blue-800 hover:text-blue-900"> Connect with your organization </a>
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}




// -->
// <!--
//   This example requires updating your template:

//   ```
//   <html class="h-full bg-gray-50">
//   <body class="h-full">
//   ```
// -->
// <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//   <div class="max-w-md w-full space-y-8">
//     <div>
//       <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
//       <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//       <p class="mt-2 text-center text-sm text-gray-600">
//         Or
//         <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
//       </p>
//     </div>
//     <form class="mt-8 space-y-6" action="#" method="POST">
//       <input type="hidden" name="remember" value="true">
//       <div class="rounded-md shadow-sm -space-y-px">
//         <div>
//           <label for="email-address" class="sr-only">Email address</label>
//           <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
//         </div>
//         <div>
//           <label for="password" class="sr-only">Password</label>
//           <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
//         </div>
//       </div>

//       <div class="flex items-center justify-between">
//         <div class="flex items-center">
//           <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
//           <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
//         </div>

//         <div class="text-sm">
//           <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
//         </div>
//       </div>

//       <div>
//         <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//           <span class="absolute left-0 inset-y-0 flex items-center pl-3">
//             <!-- Heroicon name: solid/lock-closed -->
//             <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//               <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
//             </svg>
//           </span>
//           Sign in
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
