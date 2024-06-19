import Image from "next/image";
import React from "react";
import gold from "../public/gold17.webp";

const Landing = () => {
  return (
    <section className="md:flex grid-rows-2 grid h-full max-w-7xl mx-auto px-0 lg:px-6 z-10">
      <div className=" grid-rows-1 md:flex-1 self-center md:self-end pt-36 md:pb-24 lg:pt-0">
        <p className="font-semibold text-sm md:text-xl mb-2 md:mb-4">THE SIMPLEST WAY TO INVEST IN GOLD.</p>
        <h1 className="lg:text-7xl text-5xl font-semibold lg:font-bold mb-3 lg:mb-5 leading-[1.10] text-yellow-500/80">
          Revolutionizing the Gold Buying Sector
        </h1>
        <p className="text-2xl font-semibold ">
          Elevating Standards for Safe, Private, Efficient, and Equitable Transactions.
        </p>
      </div>
      <div className=" relative grid-rows-1 md:flex-1 self-center md:self-end h-full w-full lg:h-[600px] lg:w-[600px]">
        <Image
          fill
          src={gold}
          placeholder="empty"
          loading="eager"
          priority
          className="h-full w-full lg:h-[600px] lg:w-[600px] object-contain scale-x-[-1] "
          alt="image of gold nuggets"
        />
      </div>
    </section>
  );
};

export default Landing;
