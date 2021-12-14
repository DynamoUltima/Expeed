import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Navbar from "../../../comps/navbar";
import OrderTabbar from "../../../comps/orderTabbar";
import Tabbar from "../../../comps/tabbar";
import Delivered from "../../tabPages/delivered";
import Pending from "../../tabPages/pending";
import MyDeliveries from "./orderTabs/myDeliveries";
import MyOrders from "./orderTabs/myOrders";
import PendingOrder from "./orderTabs/pending_order";

const providerNavigation = {
    categories: [
        {
            id: 'pending',
            name: 'Pending Orders',
            page: <PendingOrder />


        },


        {
            id: 'orders',
            name: 'My  Orders',
            page: <MyOrders />,


        },

        {
            id: 'deliveries',
            name: 'My Deliveries',
            page: <MyDeliveries />,

        },


    ],

}

const OrderHome = () => {
    return (
        <div>
            <Tab.Group as="div" className="mt-2">
                <div className="divide-y divide-black divide-opacity-25">
                    <Navbar />
                    <OrderTabbar />

                    {/* Tabs */}
                    <div>

                        <Tab.Panels as={Fragment}>
                            {providerNavigation.categories.map((category) => (
                                <div key={category.name}>{category.page}</div>
                            ))}
                        </Tab.Panels>

                    </div>
                </div>


            </Tab.Group>

        </div>
    );
}

export default OrderHome;