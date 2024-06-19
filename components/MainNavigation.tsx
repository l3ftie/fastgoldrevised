"use client";

import { mainLinks } from "@/data/mainLinks";
import { BadgeDollarSignIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MainNavigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const path = usePathname();
  const pageName = path.replace("/", "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToDiv = (id: any) => {
    const div = document.getElementById(id);
    div?.scrollIntoView({ behavior: "smooth" });
  };

  // if (pageName !== "") return null;

  return (
    <div className={`fixed top-8 z-50  left-2 right-2 px-2 lg:px-0`}>
      <nav
        className={` ${
          isScrolled
            ? " inset-0  backdrop-blur-xl bg-black/10  border-2 rounded-full border-yellow-500/80"
            : "border-2 rounded-full border-transparent"
        }  max-w-7xl mx-auto p-2 lg:p-3 lg:px-4 lg:w-full  flex items-center justify-between transition-all duration-500`}
      >
        <Link href="/" className="flex items-center gap-2 lg:gap-4">
          <button
            aria-label="open"
            onClick={() => setIsOpen(true)}
            className="lg:hidden border-2 rounded-full p-3 border-yellow-500/80"
          >
            <MenuIcon size={24} />
          </button>
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
        <div className="flex-1 flex items-center justify-end lg:gap-12">
          <div className="hidden lg:flex items-center space-x-5">
            {mainLinks.map((link) => (
              <button
                aria-label={link.linkName}
                key={link.id}
                className="font-semibold hover:text-yellow-500/80 transition-colors"
                onClick={() => {
                  pageName === "" ? scrollToDiv(link.to) : router.push(`/`, { scroll: true });
                }}
              >
                {link.linkName}
              </button>
            ))}
          </div>
          <button
            aria-label="contact fast gold africa"
            onClick={() => {
              scrollToDiv("contact");
            }}
            className="flex items-center gap-2 border-2 border-yellow-500/80 rounded-full hover:bg-yellow-500/80 hover:text-gray-800 transition-all px-3 lg:px-3 py-3 lg:py-3 text-xs font-semibold"
          >
            contact us
            <BadgeDollarSignIcon size={24} />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="bg-gray-800 fixed top-0 bottom-0 left-0 right-0 flex flex-col p-6">
          <div className="flex items-center justify-center gap-3">
            <Image
              width={34}
              height={34}
              className="h-12 object-contain"
              src="/fastgoldlogo.png"
              alt="Fast Gold Africa"
            />

            <div>
              <h1 className=" text-gray-100 text-xl lg:text-3xl font-black">
                Fast Gold <span className="text-yellow-500/80">Africa</span>
              </h1>
              <p className="text-xs">Your Reliable Gold Trading Partner</p>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-center justify-center gap-6">
            {[...mainLinks, { id: 5, linkName: "Buy Gold", to: "contact" }].map((link) => (
              <a
                className="tracking-wide text-4xl font-extrabold font"
                key={link.id}
                onClick={() => {
                  scrollToDiv(link.to);
                  setIsOpen(false);
                }}
              >
                {link.linkName}
              </a>
            ))}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-center">
            <button
              aria-label="Close"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-500/80 rounded-full px-4 py-2 text-gray-800 font-semibold"
            >
              Close Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainNavigation;
