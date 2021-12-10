import { Tab } from "@headlessui/react";
import Image from 'next/image';
import personnel from "../../assets/images/personnel.png"
import profileImage from "../../assets/images/windows.jpg"
import ProgressBar from "../../comps/progressBar";

const Delivered = () => {
    return (
        <Tab.Panel className="pt-10 pb-8 px-4 space-y-10 " >
            <div className="self-center font-bold mx-14">Delivered Orders</div>

            <div className="m-24">
                <div className="flex  h-44 rounded overflow-hidden shadow-lg bg-gray-50 relative " >
                    <div className="h-full w-72 ">
                        <Image src={profileImage} alt="order" className="object-cover object-center  h-full visible group-hover:hidden" />
                    </div>
                    <div className="">

                        <div className="flex items-center  space-x-4 m-4 absolute inset-x-60 top-0 " >
                            {/* <Image className=" h-4 w-4 rounded-full object-contain" src={profileImage} alt="profile" /> */}
                            <div className="w-14 h-8 relative mb-4">
                                <div className="group w-full h-full  rounded-full overflow-hidden shadow-lg text-center bg-purple table cursor-pointer ring ring-white bg-white">
                                    {/* <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span> */}
                                    <Image src={personnel} alt="lovely avatar" className="bg-contain object-cover object-center w-full h-full visible group-hover:hidden" />
                                </div>
                            </div>

                        </div>
                        <div className="flex-col mx-9 my-4">
                            <p className="text-gray-700 text-base">
                                Consider your all assigments and project works completed
                            </p>

                            <div className=" flex items-center space-x-2  pt-4 pb-2 ">
                                <svg className="inline w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <span className="text-yellow-400 font-extrabold">5.0</span>
                                <span>(34)</span>

                            </div>
                            {/* <ProgressBar /> */}

                            <div className="flex-grow "><ProgressBar /></div>

                        </div>
                    </div>

                    <div className=" m-4  items-stretch ">
                        <div className="inline-block"><p>Service Completed</p></div>

                        {/* <div className="flex-grow " ><ProgressBar /></div> */}

                    </div>
                </div>
            </div>


          


            
        </Tab.Panel>
    );
}

export default Delivered;