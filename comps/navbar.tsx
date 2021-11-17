import React from "react";
import MenuBar from "./menu";
import Search from "./search";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-between p-2 items-center">
            <div className="flex flex-row justify-between p-2 items-center" >
              <div className="font-bold mr-7 text-xl">Expeed</div>

              <Search />
            </div>

            <MenuBar />

          </div>
    );
}

export default Navbar;