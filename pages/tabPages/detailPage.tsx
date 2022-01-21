import CarouselSlider from "../../comps/carouselSlider";
import Navbar from "../../comps/navbar";

const PlaceOrderDetailPage = () => {
    return (
        <div className="divide-y divide-black divide-opacity-25 w-screen">

            <Navbar />
            <div className="flex flex-grow justify-between ">
                {/* Project Details  */}
                <div className="p-8  flex-col space-y-10 ">

                    <div><p className="font-extrabold text-lg"> I will build a website with react and Node Js</p></div>

                    <div className="w-96"><CarouselSlider /></div>

                    <p className="font-extrabold text-xl text-black">About This Project</p>




                </div>
              


                {/* Pricing and Contact medium */}
                <div className=" p-8 flex flex-col space-y-10">
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

                            <h1 className="font-medium">WHAT&#39;S INCLUDED</h1>

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