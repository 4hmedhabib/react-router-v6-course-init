import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <main className="flex py-5 px-3 mt-28 justify-center items-center">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-28 bg-white rounded-lg px-5 py-5 shadow-md border border-gray-100 shadow-gray-300">
          <h1 className="text-2xl text-center font-bold tracking-widest font-ubuntu text-slate-500">
            Home Page
          </h1>
          <p className="mt-3 font-ubuntu tracking-wider text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            minus. Qui praesentium ratione, expedita dolores molestiae quisquam
            quidem iure assumenda placeat cupiditate? Sapiente iusto ut
            similique rem explicabo tenetur minima?
          </p>
          <p className="mt-3 font-ubuntu tracking-wider text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
            minus. Qui praesentium ratione, expedita dolores molestiae quisquam
            quidem iure assumenda placeat cupiditate? Sapiente iusto ut
            similique rem explicabo tenetur minima?
          </p>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
