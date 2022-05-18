import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-3 bg-white shadow shadow-gray-200 border-b-2 border-b-gray-200 font-ubuntu tracking-wider">
      <div className="flex justify-center items-center gap-3">
        <img
          src="https://cdn.pellerex.com/public/ecosystem/web/content/web-spa-routing/pellerex-spa-routing.png"
          alt=""
          className="w-16"
        />
        <h1 className="text-xl font-bold text-red-700">React Router</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
