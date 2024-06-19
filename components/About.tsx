import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:flex h-full max-w-7xl mx-auto lg:px-6 z-10">
      <div className="self-center w-full pt-36">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-1/2">
            <h3 className="fancy-font text-3xl lg:text-4xl mb-4">
              Fast Gold Africa: Your Reliable Gold Trading Partner
            </h3>
            <p className="mb-4 text-lg">
              Looking for a trusted and efficient gold trading partner in South Africa? Look no further than Fast Gold
              Africa! We are a leading gold trader that specializes in buying and selling gold to clients all around the
              world. Our process is fast, transparent, and hassle-free, ensuring that you always get the best value for
              your investment.
            </p>
            <p className="mb-4 text-lg">
              At Fast Gold Africa, we take pride in our large resources of gold, ensuring that we can offer you a
              diverse range of gold products. From exquisite gold jewelry to rare gold coins, we have something to suit
              every taste and budget. Our gold items are carefully selected and authenticated, guaranteeing their
              authenticity and value.
            </p>
            <p className="mb-4 text-lg">
              So why wait? Contact Fast Gold Africa today and let us help you take your gold trading to the next level.
              With our fast, reliable, and transparent service, you can rest assured that you are in good hands.
            </p>
          </div>
          <Image
            height={400}
            width={400}
            className="object-contain hidden lg:block rounded-md"
            src="/gold34.webp"
            alt="bags of gold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 md:mt-7">
          <div className="col-span-1 gap-3 flex flex-col lg:items-center bg-slate-300/20 rounded-md p-4">
            <div className="flex flex-col w-full pb-2 border-b border-yellow-400/40">
              <h3 className="text-2xl font-bold">Gold Mining</h3>
              <span className="text-xs">01</span>
            </div>
            <div>
              <p className="text-gray-50">
                At fast gold africa, we utilize advanced machinery to extract gold, while also collaborating with local
                communities to purchase raw gold from nearby miners. We carefully document and process the gold
                according to our clients specific requirements, ensuring the highest quality standards.
              </p>
            </div>
          </div>
          <div className="col-span-1 gap-3 flex flex-col lg:items-center bg-slate-300/20 rounded-md p-4">
            <div className="flex flex-col w-full pb-2 border-b border-yellow-400/40">
              <h3 className="text-2xl font-bold">Gold Supply</h3>
              <span className="text-xs">02</span>
            </div>
            <div>
              <p className="text-gray-50">
                Our company has the capability to supply gold ranging from one ounce to one ton. This is made possible
                by our operations in various gold mining countries, where we establish partnerships with both local
                communities and licensed gold mining companies as our trusted sources.
              </p>
            </div>
          </div>
          <div className="col-span-1 gap-3 flex flex-col lg:items-center bg-slate-300/20 rounded-md p-4 ">
            <div className="flex flex-col w-full  pb-2 border-b border-yellow-400/40">
              <h3 className="text-2xl font-bold">Gold Exploration</h3>
              <span className="text-xs">03</span>
            </div>

            <div>
              <p className="text-gray-50">
                Our extensive experience and highly skilled logistics team give us a competitive advantage in exporting
                gold from Africa. We have established partnerships with internationally recognized shipping companies,
                such as DHL, to ensure secure and efficient transportation of gold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
