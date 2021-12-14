import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../../../assets/images/personnel.png"
import profileImage from "../../../../assets/images/windows.jpg"

const PendingOrder = () => {
    return (
        <div>

            <Tab.Panel className="pt-10 pb-8 px-4 space-y-10 " >

                <div className="self-center font-bold mx-14">Pending Orders</div>



                <div className="m-24">
                    <div className="flex  h-44 rounded overflow-hidden shadow-lg bg-gray-50 relative p-10" >
                        <div className="h-full pt-8 px-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div className="">

                            <div className="flex-col mx-9 my-4">
                                <p className="text-gray-700 text-base whitespace-normal ... flex-wrap">
                                    Consider your all assigments ...
                                </p>

                                <div className=" flex items-center space-x-2  pt-4 pb-2 ">
                                    <div className="flex justify-center items-center m-1 font-medium py-2 px-6  rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
                                        <div className="text-xs font-normal leading-none max-w-full flex-initial">Order 1492611</div>
                                    </div>

                                </div>
                                {/* <ProgressBar /> */}

                                {/* <div className="flex-grow "><ProgressBar /></div> */}

                            </div>
                        </div>

                        <div className=" m-4  items-stretch ">
                            {/* <div className="inline-block"><p>Service Progress</p></div> */}

                            <button className="bg-indigo-500 p-2 text-white text-sm rounded-3xl shadow-md hover:bg-indigo-400"> submit quote</button>
                            <div className="flex space-x-2 mt-4">
                                <div className="flex-grow text-sm">Delivery </div>
                                <div className="flex-grow text-sm">Within 20 days</div>
                            </div>

                        </div>

                        <div className="flex items-center justify-items-stretch">
                            <div className="w-14 h-8  mb-4">
                                <div className="group w-full h-full  rounded-full overflow-hidden shadow-lg text-center bg-purple table cursor-pointer ring ring-white bg-white">
                                    {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span> */}
                                    <Image src={personnel} alt="lovely avatar" className="bg-contain object-cover object-center w-full h-full visible group-hover:hidden" />
                                </div>

                            </div>
                            <div className="text-sm ml-4">Peter parker</div>
                        </div>

                        <div className="flex items-center">
                            <div className="border border-gray-400 p-2 rounded-r-full flex-row rounded-bl-full ml-4 ">
                                <div className="group w-full h-full  rounded-full overflow-hidden shadow-lg text-center bg-purple table cursor-pointer ring ring-white bg-green-500">
                                    {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span> */}
                                    <div className="bg-green-500"></div>
                                </div>
                                <div>Accepted</div>

                            </div>
                        </div>




                    </div>




                </div>



            </Tab.Panel>
        </div>
    );
}

export default PendingOrder;