import React from 'react'
// import { Link } from 'react-router-dom'
import DropdownCustom from './DropDown'
const Postcard = () => {
    return (
        <section class="flex mt-10 bg-gray-100 lg:h-screen font-poppins dark:bg-gray-900 ">
            <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
                    <div>
                        <div class="relative w-full h-56">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png" alt=""
                                class="object-cover w-full h-full " />
                            <span class="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                                Sender</span>
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700">
                            <div class="flex items-center justify-between mb-1">
                                {/* <div>
                                    <Link to={'/'}>
                                        <h2 class="text-xl font-semibold dark:text-gray-300">Amit Robinson</h2>
                                    </Link>
                                </div>
                                <div class="flex">
                                    <a href="as" class="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor"
                                            class="bi bi-share" viewBox="0 0 16 16">
                                            <path
                                                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                    </a>
                                    <a class="text-lg font-medium text-red-600 dark:text-gray-300" href="asdf"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg></a>
                                </div> */}
                                <DropdownCustom/>
                            </div>
                            <div class="flex items-center mb-4">
                                <a href="as" class="mr-1 text-blue-600 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </a>
                                <span class="text-sm text-gray-600 dark:text-gray-400">Gorkha,Nepal</span>
                            </div>
                            <h2 class="mb-4 text-lg font-medium text-gray-700 dark:text-gray-400">
                                We will take you different places of nepal and will translate japanese to english...
                            </h2>
                            <div class="flex items-center justify-between ">
                                <div class="flex items-center">
                                    <a href="as" class="mr-2 text-blue-700 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                            class="bi bi-calendar-day" viewBox="0 0 16 16">
                                            <path
                                                d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg></a>
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-400">3/23/2022</span>
                                </div>
                                <a href="asdf"
                                    class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100">
                                    View Details</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <div class="relative w-full h-56">
                            <img src="https://i.postimg.cc/fW3hVdhv/pexels-rodnae-productions-7648047.jpg" alt=""
                                class="object-cover w-full h-full "/>
                                <span class="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                                    Memory</span>
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700">
                            <div class="flex items-center justify-between mb-1">
                                <div>
                                    <a href="a">
                                        <h2 class="text-xl font-semibold dark:text-gray-300">Jacob Robinson</h2>
                                    </a>
                                </div>
                                <div class="flex">
                                    <a href="a" class="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor"
                                            class="bi bi-share" viewBox="0 0 16 16">
                                            <path
                                                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                    </a>
                                    <a class="text-lg font-medium text-red-600 dark:text-gray-300" href="asdf"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg></a>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <a href="as" class="mr-1 text-blue-600 dark:text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </a>
                                <span class="text-sm text-gray-600 dark:text-gray-400">Gorkha,Nepal</span>
                            </div>
                            <h2 class="mb-4 text-lg font-medium text-gray-700 dark:text-gray-400">
                                We will take you different places of nepal and will translate japanese to english
                            </h2>
                            <div class="flex items-center justify-between ">
                                <div class="flex items-center">
                                    <a href="asdf" class="mr-2 text-blue-700 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                            class="bi bi-calendar-day" viewBox="0 0 16 16">
                                            <path
                                                d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg></a>
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-400">3/23/2022</span>
                                </div>
                                <a href="asdf"
                                    class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100">
                                    View Details</a>
                            </div>
                        </div> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>

                    </div>
                    <div>
                        <div class="relative w-full h-56">
                            <img src="data:image/png;base64,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" alt="" class="object-cover w-full h-full " />
                            <span class="absolute top-0 left-0 px-2 py-1 mt-2 ml-2 text-xs text-white bg-blue-700">
                                Receiver</span>
                        </div>
                        <div class="p-4 bg-white dark:bg-gray-700">
                            <div class="flex items-center justify-between mb-1">
                                <div>
                                    <a href="as">
                                        <h2 class="text-xl font-semibold dark:text-gray-300">John Smith</h2>
                                    </a>
                                </div>
                                <div class="flex">
                                    <a href="as" class="mr-3 text-lg font-medium text-blue-600 dark:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" fill="currentColor"
                                            class="bi bi-share" viewBox="0 0 16 16">
                                            <path
                                                d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                    </a>
                                    <a class="text-lg font-medium text-red-600 dark:text-gray-300" href="asdf"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-heart" viewBox="0 0 16 16">
                                        <path
                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg></a>
                                </div>
                            </div>
                            <div class="flex items-center mb-4">
                                <a href="ss" class="mr-1 text-blue-600 dark:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                        class="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                </a>
                                <span class="text-sm text-gray-600 dark:text-gray-400">Gorkha,Nepal</span>
                            </div>
                            <h2 class="mb-4 text-lg font-medium text-gray-700 dark:text-gray-400">
                                We will take you different places of nepal and will translate japanese to english
                            </h2>
                            <div class="flex items-center justify-between ">
                                <div class="flex items-center">
                                    <a href="as" class="mr-2 text-blue-700 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                                            class="bi bi-calendar-day" viewBox="0 0 16 16">
                                            <path
                                                d="M4.684 11.523v-2.3h2.261v-.61H4.684V6.801h2.464v-.61H4v5.332h.684zm3.296 0h.676V8.98c0-.554.227-1.007.953-1.007.125 0 .258.004.329.015v-.613a1.806 1.806 0 0 0-.254-.02c-.582 0-.891.32-1.012.567h-.02v-.504H7.98v4.105zm2.805-5.093c0 .238.192.425.43.425a.428.428 0 1 0 0-.855.426.426 0 0 0-.43.43zm.094 5.093h.672V7.418h-.672v4.105z" />
                                            <path
                                                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                        </svg></a>
                                    <span class="text-sm font-medium text-gray-700 dark:text-gray-400">3/23/2022</span>
                                </div>
                                <a href="asdf"
                                    class="px-3 py-2 text-xs text-gray-100 bg-blue-700 rounded hover:bg-blue-600 hover:text-gray-100">
                                    View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Postcard