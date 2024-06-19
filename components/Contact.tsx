"use client";
import { branches } from "@/data/branches";
import { mainLinks } from "@/data/mainLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-36 py-3  lg:px-0 content-end">
      <div className="max-w-7xl mx-auto">
        {/* map */}
        <div className="grid grid-row-1 lg:grid-cols-6">
          <div className="lg:col-span-6">
            <h3 className="text-gray-50 font-semibold text-2xl uppercase tracking-wide lg:mb-5">Location</h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-5 mt-6 lg:mt-0">
              {branches.map((branch) => (
                <div key={branch.id} className="w-auto">
                  <div className="flex items-center gap-2 ml-2 mb-2">
                    <span className="h-1 w-3 rounded-full bg-white"></span>
                    <p className="text-gray-50 font-semibold">{branch.title}</p>
                  </div>
                  <div className="bg-yellow-400 w-full p-3 rounded-md text-black font-semibold">
                    <p>{branch.country}</p>
                    <span>{branch.contact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* links */}
        <div className="grid grid-cols-2 lg:grid-cols-5 mt-12">
          <div className="col-span-2 mb-6 lg:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image
                width={34}
                height={34}
                className="hidden lg:block lg:h-12 object-contain"
                src="/fastgoldlogo.png"
                alt="Fast Gold Africa"
              />
              <div>
                <h1 className=" text-gray-100 text-xl lg:text-3xl font-black">
                  Fast Gold <span className="text-yellow-500/80">Africa</span>
                </h1>
                <p className=" hidden lg:block lg:text-xs">Your Reliable Gold Trading Partner</p>
              </div>
            </Link>
          </div>
          <div>
            <p className="text-gray-50 font-semibold text-2xl uppercase tracking-wide mb-5 lg:mb-5">Navigation</p>
            <div className="grid grid-flow-row space-y-4 md:space-y-2">
              {mainLinks.map((item, index) => (
                <button
                  key={index}
                  className="cursor-pointer font-semibold md:text-sm w-fit uppercase text-gray-50 hover:text-yellow-400"
                >
                  {item.linkName}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gray-50 font-semibold text-2xl uppercase tracking-wide lg:mb-5">Contact</p>
            <div className="flex flex-col gap-4">
              <a className="text-yellow-400 truncate" href="mailto:info@fastgoldafrica.co.za">
                info@fastgoldafrica.co.za
              </a>
              <button className="text-yellow-400">27789247007</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto item-center justify-center mt-12 text-gray-50 flex gap-2">
        <p>Fast gold Africa &copy; {year}</p>
        <a href="mailto:nkarodza@gmail.com">Designed by RND</a>
      </div>
      <FloatingWhatsApp phoneNumber="+27789247007" accountName="Fast Gold Africa" darkMode avatar="./favicon.png" />
    </footer>
  );
};

export default Contact;
