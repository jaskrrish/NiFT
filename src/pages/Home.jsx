import React from "react";
import Header from "../components/Navbar/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="text-white w-max h-max bg-gray-400 bg-opacity-10 backdrop-blur-sm pl-[80px] pr-[80px] pt-[40px] pb-[40px] mt-[90px] ml-[150px] rounded-lg">
        <h1 className="text-5xl font-Inter">
          Explore the Largest <br />{" "}
          <span className="text-[#99ff53]">IDEA-NFT</span> Marketplace
        </h1>
        <p className="m-3">Buy,Sell & Trade IDEAS Easily and Securely</p>
        <div className="m-4 mt-6">
          <button className="bg-[#99ff53] text-black p-3 font-Inter font-semibold text-2xl rounded-full ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
