import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const BuyNow = () => {
  return (
    <div className=" h-full max-w-7xl mx-auto pt-32 lg:px-6 z-10">
      <p className="text-2xl text-center fancy-font mb-8">
        Buying is simple and straightforward contact us either via the website or directly on whatsapp for fast and
        prompt response.
      </p>
      <div className="lg:grid grid-cols-2 self-center  lg:pt-0">
        <ContactForm />
        <div className=" self-center"></div>
      </div>
    </div>
  );
};

export default BuyNow;
