import { NextPage } from "next";
import Image from "next/image";
// import CarouselSlider from "../../comps/carouselSlider";
import Navbar from "../comps/navbar/navbar";
import CarouselSlider from "../comps/carouselSlider";
import Windows from "../assets/images/windows.jpg"

const PlaceOrderDetailPage: NextPage = () => {
    return (
        <div className=" w-screen  h-screen   overflow-hidden">
            {/* divide-y divide-black divide-opacity-25 */}
            <Navbar />
            <div className="  flex flex-row border">
                {/* Project Details  */}

                <div className="h-screen flex-1   w-1/2 overflow-y-auto pb-20 ">
                    <div className="p-4 flex flex-col space-y-10  justify-center items-center ">


                        <div className="flex flex-row  justify-start w-3/4 "><p className="font-extrabold text-xl"> I will build a website with react and Node Js</p></div>

                        <div className="w-3/4"><CarouselSlider /></div>

                        <div className="flex flex-row  justify-start w-3/4 " >
                            <div className="flex flex-col space-y-5">
                                <p className="font-extrabold text-xl text-black ">About This Project</p>
                                <p>
                                    Websites play a significant part in a companys brand identity and require a professional touch to ensure success in achieving strategic goals.
                                    I will be your trusted designer who also applies digital marketing and search engine optimisation best practices at the same time.

                                    Ive seen too many websites launch without effective digital marketing and SEO techniques applied. They look great, but they dont perform well.

                                    I am the whole package, because I have experience across the entire spectrum of online, I can design and optimise your Squarespace site for success.

                                    I have eleven years of experience in digital marketing, have worked across numerous content management systems during my career and built several sites for clients.

                                    I have a Bachelor of Social Science in Media Studies and a Certificate of Digital Marketing (Marketing Association).

                                </p>

                            </div>



                        </div>

                        {/* About Seller */}

                        <div className="flex flex-col  space-y-2 w-3/4">

                            <div className="font-bold text-xl text-black">About Seller</div>
                            {/* Profile Tile */}
                            <div className="flex flex-row space-x-2">
                                {/* Avatar */}
                                <div className="relative w-16 h-16 bg-indigo-500 overflow-clip rounded-full ">
                                    <Image alt="profile" layout="fill" src={Windows} />
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <div className=" flex flex-row space-x-2 ">
                                        <div className="font-bold">UltimaJohnson</div>
                                        <div className="  ring-1  ring-indigo-500 px-1 rounded-full text-indigo-500"> Online</div>


                                    </div>
                                    <div className="font-normal"> Quality is everything</div>
                                    <button onClick={()=>console.log('contact me')} className=" ring-1 ring-indigo-500 rounded hover:bg-indigo-500">Contact me</button>

                                </div>


                            </div>
                        </div>






                    </div>
                </div>


                {/* Pricing and Contact medium */}
                <div className=" p-8 flex flex-col space-y-10 ">
                    <p className="font-extrabold">
                        Pricing
                    </p>
                    {/* Card */}

                    <div className="bg-white w-10/12 border border-gray-500 flex justify-start rounded-2xl px-8 py-3">
                        <div className="flex flex-col  justify-items-start space-y-4">
                            <h1 className="font-extrabold ">Freelancer</h1>

                            <p className="text-sm text-gray-400">All the basics for starting a new bussiness</p>

                            <div className="text-4xl font-extrabold">$21</div>

                            <button className="bg-indigo-500 p-2 text-white text-sm rounded-xl shadow-md hover:bg-indigo-400"> Continue(US$21)</button>

                            <div className=" border border-gray-500 "></div>

                            <h1 className="font-medium text-sm">WHAT&#39;S INCLUDED</h1>

                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-row space-x-3">
                                    <svg className="w-6 h-6 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <p className="text-sm"> 4 months intensive teaching and training</p>
                                </div>

                                <div className="flex flex-row space-x-3 ">
                                    <svg className="w-6 h-6 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    <p className="text-sm"> 4 months intensive teaching and training</p>
                                </div>

                            </div>



                        </div>

                    </div>



                </div>



            </div>


        </div>


    );
}

export default PlaceOrderDetailPage;