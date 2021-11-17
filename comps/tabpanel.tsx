import { Tab } from "@headlessui/react";
import Image from 'next/image';
import React from "react";
import profileImage from "../assets/images/windows.jpg"
import personnel from "../assets/images/personnel.png"
import Chips from "./chips";


interface TabPanelProps {
    category?: {
        id: String,
        name: String,
        featured: {
            name: string,
            href: String,
            imageSrc: String,
            imageAlt: String,
        }[],
        sections: {
            id: String,
            name: String,
            items: {
                name: String,
                href: String,
            }[],
        }[];
    }
}
const TabPanel = ({ category }: TabPanelProps) => {

    //TabPanel.getStaticProps=async()=>{}
    return (
        <Tab.Panel className="pt-10 pb-8 px-4 space-y-10 " >
            <Chips />
            <div className="grid grid-cols-1 gap-x-4 ">
                <div className="md:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 xl:grid-cols-4 ">

                    <div className="rounded overflow-hidden shadow-lg ">
                        <Image className="w-full" src={profileImage} alt="Forest" />
                        <div className="px-6 py-4">
                            <div className="flex items-center  space-x-4">
                                {/* <Image className=" h-4 w-4 rounded-full object-contain" src={profileImage} alt="profile" /> */}
                                <div className="w-8 h-8 relative mb-4">
                                    <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                                        <span className="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
                                        <Image src={personnel} alt="lovely avatar" className="object-cover object-center w-full h-full visible group-hover:hidden" />
                                    </div>
                                </div>
                                <div className="font-bold text-lg mb-2">Johnson Graham</div>
                            </div>
                            <p className="text-gray-700 text-base">
                                Consider your all assigments and project works completed
                            </p>
                        </div>
                        <div className="divide-y divide-gray-400">
                            <div className=" flex items-center space-x-4 px-6 pt-4 pb-2 ">
                                <span><svg className="inline w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg></span>
                                <span className="text-yellow-400 font-extrabold">5.0</span>
                            </div>
                            <div className="">
                                hi
                            </div>
                        </div>

                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <Image className="w-full" src={profileImage} alt="Forest" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Forest</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <Image className="w-full" src={profileImage} alt="Forest" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Forest</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <Image className="w-full" src={profileImage} alt="Forest" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Forest</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                        </div>
                    </div>

                    <div className="rounded overflow-hidden shadow-lg">
                        <Image className="w-full" src={profileImage} alt="Forest" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">Forest</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                        </div>
                    </div>



                </div>
            </div>

        </Tab.Panel>
    );
}

export default TabPanel;