import type { NextPage } from 'next'
import { Tab, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import profileImage from "../assets/images/windows.jpg"
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import MenuBar from '../comps/menu'
import Search from '../comps/search'
import Navbar from '../comps/navbar'
import Tabbar from '../comps/tabbar'
import Pending from './tabPages/pending'
import Delivered from './tabPages/delivered'
import PlaceOrder from '../comps/placeOrder'

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




      {/* nav Bar */}

      {
      /* logo  search bar  nav-bar-items profile pic 
      div<div> logo name  search</div> <div>      
      */}
      <Tab.Group as="div" className="mt-2">

        <div className="divide-y divide-black divide-opacity-25">


          <Navbar />
          <Tabbar />

          {/* Tabs */}
          <div>

            <Tab.Panels as={Fragment}>
              {navigation.categories.map((category) => (
                <div key={category.name}>{category.page}</div>

              ))}
            </Tab.Panels>

          </div>
        </div>
      </Tab.Group>

    </div>
  )
}

export default Home
