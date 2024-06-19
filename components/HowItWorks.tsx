"use client";
import { BadgeDollarSignIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import gold1img from "../public/gold1.webp";
import gold2img from "../public/gold2.webp";
import gold3img from "../public/gold3.webp";
import gold4img from "../public/gold4.webp";

const HowItWorks = () => {
  return (
    <section className=" h-full max-w-7xl mx-auto lg:px-6 z-10">
      <div className="self-center  ">
        {/* action banner */}
        <div className="lg:grid relative overflow-hidden lg:grid-cols-5 w-full p-6 border-2 border-gray-500/40 rounded-md my-8 lg:my-12 bg-slate-600/30">
          <div className="col-span-2">
            <p className="fancy-font text-3xl lg:text-4xl">
              Get Started today with securing your wealth with Gold, Get the investing going...
            </p>
            <button
              className=" mt-3 flex items-center gap-2 border-2 border-yellow-500/80 rounded-full hover:bg-yellow-500/80 hover:text-gray-800 transition-all px-4 lg:px-4 py-3  text-base font-semibold"
              onClick={() => {
                const div = document.getElementById("contact");
                div?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
              <BadgeDollarSignIcon size={24} />
            </button>
          </div>
          <Image
            src="/gold24.webp"
            height={300}
            width={300}
            className="object-cover hidden lg:block absolute right-4 top-3 bottom-3  rounded-xl  h-[250px] w-[400px]"
            alt="getting started gold"
          />
          <div className="col-span-3 content-end"></div>
        </div>
        {/*  */}
        <div className="lg:grid grid-cols-2 gap-4">
          <div>
            <p className="fancy-font text-2xl lg:text-3xl my-2 mb-3">Buying Gold made easy</p>
            <p className="text-lg">
              Our buying process is easy and secure, allowing you to purchase gold nuggets and gold bars with
              confidence. Simply browse our selection, choose the desired items, and proceed with the payment. Our
              knowledgeable support team is available to assist you throughout the process and answer any questions you
              may have.
            </p>
          </div>
          <div>
            <p className=" pt-6 lg:pt-14 text-lg">
              Experience the satisfaction of owning genuine gold minerals from Fast Gold Africa. With our reputation as
              the leading seller of gold minerals, you can trust that you are getting the finest quality at a good
              price. Start your journey into the world of gold ownership by exploring our collection today!
            </p>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="grid md:grid-cols-4 gap-4 my-8 relative">
        <Image
          src={gold1img}
          alt="fast gold africa gold nuggets"
          className=" object-contain h-full w-full rounded-lg border-2 border-gray-500/40 hover:scale-105 transition-all duration-200 ease"
        />
        <Image
          src={gold2img}
          alt="fast gold africa gold nuggets"
          className=" object-contain h-full w-full rounded-lg border-2 border-gray-500/40 hover:scale-105 transition-all duration-200 ease"
        />
        <Image
          src={gold3img}
          alt="fast gold africa gold nuggets"
          className=" object-cover h-full w-full rounded-lg border-2 border-gray-500/40 hover:scale-105 transition-all duration-200 ease"
        />
        <Image
          src={gold4img}
          alt="fast gold africa gold nuggets"
          className=" object-cover h-full w-full rounded-lg border-2 border-gray-500/40 hover:scale-105 transition-all duration-200 ease"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
