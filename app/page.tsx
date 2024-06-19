import About from "@/components/About";
import BLogList from "@/components/BLogList";
import BuyNow from "@/components/BuyNow";
import Contact from "@/components/Contact";
import HowItWorks from "@/components/HowItWorks";
import Landing from "@/components/Landing";
import MainNavigation from "@/components/MainNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <MainNavigation />
      <section className="min-h-screen md:h-screen relative" id="home">
        <Landing />
        <Image className="opacity-25 object-cover -z-10 absolute" fill alt="background image" src="/pngegg.png" />
      </section>

      <section className="min-h-screen md:h-screen" id="howitworks">
        <HowItWorks />
      </section>

      <section className="">
        <BLogList />
      </section>

      <section className="min-h-screen md:h-full" id="about">
        <About />
      </section>

      <section className="min-h-screen md:h-screen relative" id="buy">
        <BuyNow />
        <Image className="opacity-25 object-cover absolute -z-10" fill alt="background image" src="/pngegg.png" />
      </section>

      <section className="" id="contact">
        <Contact />
      </section>
    </main>
  );
}
