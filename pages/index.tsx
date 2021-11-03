import type { NextPage } from 'next'
import { Tab, Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Place Order',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },


    {
      id: 'men',
      name: 'Pending Order',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },

    {
      id: 'children',
      name: 'Delivery',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },


  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative m-auto h-screen">

      {/* nav Bar */}

      {
      /* logo  search bar  nav-bar-items profile pic 
      div<div> logo name  search</div> <div>      
      */}
      <Tab.Group as="div" className="mt-2">

        <div className="divide-y divide-black divide-opacity-25">


          <div className="flex flex-row justify-between p-2 items-center">
            <div className="flex flex-row justify-between p-2 items-center" >
              <div className="font-bold mr-7 ">Expeed</div>

              <form action="" className="" >
                <div className="flex items-center ring-2 ring-gray-400 bg-white rounded-md border-b border-gray-200 w-96 outline-none shadow-none">
                  <label htmlFor="name" className="w-10 text-right ml-4 mr-8 text-purple-20"><svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></label>
                  <input type="text" id="name" name="name" placeholder="search" className="flex-1 px-4 py-2 pl-0 bg-transparent placeholder-gray-300 outline-none text-gray-400"></input>
                </div>
              </form>
            </div>



            <div className="flex flex-row justify-between items-center">
              <button className="font-semibold text-sm p-2 hover:text-purple-600 pointer-events: auto; ">
                Switch to Services
              </button>


              <Menu >
                {({ open }) => (
                  <>
                    <button className="p-2 hover:text-purple-600 ">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path></svg>
                    </button>






                    <Menu.Button className="p-2 mr-7 hover:text-purple-600 ">

                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </Menu.Button>

                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-10 z-50 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      >
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5">Signed in as</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                            tom@example.com
                          </p>
                        </div>

                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#account-settings"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#support"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item
                            as="span"
                            disabled
                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                          >
                            New feature (soon)
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#license"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                        </div>

                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#sign-out"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}

              </Menu>



              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="h-14 w-14 p-4 rounded-full flex items-center bg-purple-600 mr-7">
                      JD
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-10 z-50 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      >
                        <div className="px-4 py-3">
                          <p className="text-sm leading-5">Signed in as</p>
                          <p className="text-sm font-medium leading-5 text-gray-900 truncate">
                            tom@example.com
                          </p>
                        </div>

                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#account-settings"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Account settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#support"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Support
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item
                            as="span"
                            disabled
                            className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                          >
                            New feature (soon)
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#license"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                License
                              </a>
                            )}
                          </Menu.Item>
                        </div>

                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#sign-out"
                                className={`${active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                                  } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}

              </Menu>



            </div>


          </div>
          <div className="">
            <Tab.List className="-mb-px flex px-4 space-x-8">
              {navigation.categories.map((category) => (
                <Tab
                  key={category.name}
                  className={({ selected }) =>
                    classNames(
                      selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                      'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                    )
                  }
                >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tabs */}
          <div>



            <Tab.Panels as={Fragment}>
              {navigation.categories.map((category) => (
                <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10 " >
                  <div className="grid grid-cols-2 gap-x-4">
                    {category.featured.map((item) => (
                      <div key={item.name} className="group relative text-sm ">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img src={item.imageSrc} alt={item.imageAlt} className="object-center object-cover " />
                        </div>
                        <a href={item.href} className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          {item.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          Shop now
                        </p>
                      </div>
                    ))}
                  </div>
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                        {section.name}
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                      >
                        {section.items.map((item) => (
                          <li key={item.name} className="flow-root">
                            <a href={item.href} className="-m-2 p-2 block text-gray-500">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>



          </div>
        </div>
      </Tab.Group>

    </div>
  )
}

export default Home
