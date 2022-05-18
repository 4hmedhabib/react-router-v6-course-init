import React, { Fragment } from "react";
import Navbar from "../../Navbar";

const Product = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="flex flex-col py-5 px-3 mt-14 justify-center items-center gap-5 font-ubuntu tracking-wide">
        <div id="title" className="mb-5 flex items-center justify-center">
          <h1 className="text-2xl flex items-center gap-5">
            <span className="bg-slate-500 px-2 py-1 rounded-lg text-white text-sm">
              Product Detail :
            </span>
            <span> Lorem ipsum dolor sit amet.</span>
          </h1>
        </div>

        <div id="body" className="flex justify-between items-start gap-5">
          <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-28 bg-white rounded-lg px-5 py-5 shadow-md border border-gray-100 shadow-gray-300 ">
            <h1 className="text-2xl text-center font-bold tracking-widest font-ubuntu text-slate-500 capitalize">
              ea molestias quasi exercitationem repellat qui ipsa sit aut
            </h1>
            <div className="flex justify-center items-center my-2">
              <h5 className="font-ubuntu capitalize text-gray-500">
                <span className="bg-slate-500 px-2 py-1 rounded-full text-white text-xs">
                  Author
                </span>
                <span> : Ahmed Habib</span>
              </h5>
            </div>
            <div>
              <p className="mt-3 mb-2 font-ubuntu tracking-wider text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat, minus. Qui praesentium ratione, expedita dolores
                molestiae quisquam quidem iure assumenda placeat cupiditate?
                Sapiente iusto ut similique rem explicabo tenetur minima?
              </p>
            </div>
            <div className="my-3">
              <h5 className="">
                <span className="bg-slate-500 px-2 py-1 text-xs text-white tracking-wider rounded-lg mr-2">
                  Date Posted:
                </span>
                <span className="text-gray-500">2020-20-20</span>
              </h5>
            </div>
            <div className="mb-2">
              <span className="hover:text-blue-500 hover:text-lg">
                <a href="#">View More</a>
              </span>
            </div>
          </div>

          <div className="w-full sm:max-w-xs md:max-w-sm min-h-28 bg-white rounded-lg px-5 pt-5 pb-16 shadow-md border border-gray-100 shadow-gray-300 flex flex-col gap-3 relative">
            <div className="flex justify-between">
              <h5 className="text-gray-500">Post ID: </h5>
              <span> 1</span>
            </div>
            <div className="flex justify-between">
              <h5 className="text-gray-500">Author: </h5>
              <span> Ahmed Habib</span>
            </div>
            <div className="flex justify-between">
              <h5 className="text-gray-500">Created At: </h5>
              <span>2020-20-02</span>
            </div>
            <div className="flex justify-end mt-5 absolute bottom-2 right-3">
              <span className="text-gray-400 text-xs">
                Powered by MERN STACK DEVELOPERS
              </span>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Product;
