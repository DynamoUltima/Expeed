import { Tab } from "@headlessui/react";
import Image from 'next/image';
import profileImage from "../assets/images/windows.jpg"


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
            <div className="grid grid-cols-1 gap-x-4">
                <div className="md:grid sm:grid-cols-2 sm:gap-3 md:grid-cols-4 md:gap-3  ">

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