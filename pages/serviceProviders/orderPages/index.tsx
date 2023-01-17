import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import Navbar from "../../../comps/navbar";
import OrderTabbar from "../../../comps/orderTabbar";
import Tabbar from "../../../comps/tabbar";
import Delivered from "../../../comps/tabPages/delivered";
import Pending from "../../../comps/tabPages/pending";
import MyDeliveries from "../../../comps/orderComps/orderTabs/myDeliveries";
import MyOrders from "../../../comps/orderComps/orderTabs/myOrders";
import PendingOrder from "../../../comps/orderComps/orderTabs/pending_order";

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