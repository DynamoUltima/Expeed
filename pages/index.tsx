import type { NextPage } from 'next'
import { Tab, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'



// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Search from '../comps/search'
import Navbar from '../comps/navbar/navbar'
import Tabbar from '../comps/tabbar'
import Pending from '../comps/tabPages/pending'
import Delivered from '../comps/tabPages/delivered'
import PlaceOrder from '../comps/tabPages/placeOrder'
import Image from 'next/image'
import Navigationbar from '../comps/navbar/navigationbar'
import Windows from "../assets/images/windows.jpg"
import gradcelaImage from "../assets/images/gradcela logo.png"
import Graduation from "../assets/svg/undraw_graduation.svg"
import Certificate from "../assets/svg/undraw_certificate.svg"
import Education from "../assets/svg/undraw_education.svg"
import Business from "/assets/svg/undraw_business.svg"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import instagram from "../assets/images/instagram.png"
import Excellence from "../assets/images/excellence-image.png"
import Link from 'next/link'







function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Place Order',
      page: <PlaceOrder />


    },


    {
      id: 'men',
      name: 'Pending Order',
      page: <Pending />,


    },

    {
      id: 'children',
      name: 'Delivered',
      page: <Delivered />,

    },


  ],

}

const Home: NextPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative m-auto h-screen overflow-x-hidden">

      <div className=' flex  flex-col p-4 '>
        <div className='flex flex-col bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl'>
          <Navigationbar />

          <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <div className="flex flex-col gap-5 lg:gap-10">
              <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-5xl text-left font-medium">
                {/* Experienced writing helps for success in academics and beyond. */}
                Unlock your academic and business potential with our expert services
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-left text-gray-500 tracking-wider">
                Get help with assignemnts, term projects, final thesis, school application essays, job cover resumes and more.
              </p>
              <button className="btn btn-sm lg:btn-lg bg-[#2DD4BF] p-2 text-white rounded-full border-none w-36 lg:w-44 capitalize">Coming soon</button>
            </div>
            <div className='relative  w-11/12'><Image alt="home" layout="cover" src={Excellence} /></div>
          </div>
        </div>






      </div>


      <div className="container mx-auto py-20">
        <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
          WHY CHOOSE US
        </p>
        <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
          Our Services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-16 py-20">
          <div className="flex flex-col gap-5 items-center">
            {/* <img src="/assets/v1.svg" alt="v1" /> */}
            <div className='relative w-44 h-44'><Image layout='fill' alt="svg" src={Graduation} /></div>
            <p className="text-2xl font-semibold">Academic Work</p>
            <div className="text-gray-500 text-center tracking-wide">
              <p>Assignments</p>
              <p>Term projects</p>
              <p>Research proposals</p>
              <p>Final thesis</p>
            </div>
            {/* <p className="text-gray-500 text-center">
              Assignments
            </p> */}
          </div>
          <div className="flex flex-col gap-5 items-center">
            {/* <img src="/assets/v2.svg" alt="v1" /> */}
            <div className='relative w-44 h-44'><Image layout='fill' alt="svg" src={Certificate} /></div>
            <p className="text-2xl font-semibold">Applications For School</p>
            <div className="text-gray-500 text-center tracking-wide">
              <p>Common app essays</p>
              <p>Statement of purpose</p>
              <p>Personal statements</p>
              <p>Motivation letters</p>
              <p>Sample writings</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center">
            {/* <img src="/assets/v3.svg" alt="v1" /> */}
            <div className='relative w-44 h-44'><Image layout='fill' alt="svg" src={Education} /></div>
            <p className="text-2xl font-semibold">Job Applications</p>
            <div className="text-gray-500 text-center tracking-wide">
              <p>Cover letters / application letters</p>
              <p>CV</p>
              <p>Resume</p>

            </div>
          </div>

          <div className="flex flex-col gap-5 items-center">
            {/* <img src="/assets/v3.svg" alt="v1" /> */}
            <div className='relative w-44 h-44'><Image layout='fill' alt="svg" src={Business} /></div>
            <p className="text-2xl font-semibold">Business Documents</p>
            <div className="text-gray-500 text-center tracking-wide">
              <p>Market research</p>
              <p>Business proposals</p>
              <p>Pitch deck</p>

            </div>
          </div>

        </div>
      </div>


      <div className="container mx-auto my-10">
        <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className='w-20 h-14 relative'><Image alt="logo" layout="contain" src={gradcelaImage} /></div>
            <p className="text-center lg:text-start">+233550115100</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Company</p>
            {/* <p className="text-base">Careers</p>
              <p className="text-base">Teachers</p> */}
            <p className="text-base">Support</p>
            <p className="text-base">Contact</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Our Services</p>
            <p className="text-base">Academic Work</p>
            <p className="text-base">Applications For School</p>
            <p className="text-base">Job Applications</p>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-5">
            <p className="text-xl font-medium">Legal</p>
            <p className="text-base">Terms & Conditions</p>
            <p className="text-base">Privacy policy</p>
          </div>
          <div className="flex flex-col items-center justify-items-start gap-5">

            <Link href={'https://www.facebook.com/gradcela'}>
              <div className=' flex items-center space-x-1'>
                <Image className="w-[18px] h-[18px] bg-blue-700" alt="facebook-icon" width={18} height={18} src={facebook} />
                <p>Facebook</p>
              </div>
            </Link>

            <Link href={'https://www.instagram.com/gradcela/'}>
              <div className='flex items-center space-x-1'>
                <Image className="w-[18px] h-[18px] bg-blue-700" alt="instagram-icon" width={18} height={18} src={instagram} />
                <p>Instagram</p>
              </div>
            </Link>

            <Link href={'https://twitter.com/gradcela'}>
              <div className='flex items-center space-x-1'><Image className="w-[18px] h-[18px] bg-blue-700" alt="twitter-icon" width={18} height={18} src={twitter} />
                <p>Twitter</p>
              </div>
            </Link>
          </div>
        </div>
      </div>







      {/* nav Bar */}

      {
      /* logo  search bar  nav-bar-items profile pic 
      div<div> logo name  search</div> <div>      
      */}
      {/* <Tab.Group as="div" className="mt-2">

        <div className="divide-y divide-black divide-opacity-25">


          <Navbar />
          <Tabbar />

          
          <div>

            <Tab.Panels as={Fragment}>
              {navigation.categories.map((category) => (
                <div key={category.name}>{category.page}</div>

              ))}
            </Tab.Panels>

          </div>
        </div>
      </Tab.Group> */}

    </div>
  )
}

export default Home
