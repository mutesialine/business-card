import Button from "./components/ui/Button";
import React from "react";
import About from "./components/sections/About";
import Interests from "./components/sections/Interests";
import Footer from "./components/layouts/Footer";
export default function App() {
  return (
    <div className="bg-[#23252C] w-[550px] mt-60 mx-60 py-8">
      <div className="max-w-[317px] mx-auto bg-[#1A1B21] rounded-b-xl ">
        <img
          src="/images/Rectangle 90.png"
          alt="profile"
          className="w-fit object-cover  "
        />
        <div className="flex flex-col justify-center items-center gap-y-2 pt-4">
          <h1 className="font-bold text-3xl text-white">Laura Smith</h1>
          <p className="text-xs text-[#F3BF99] font-normal">
            Frontend Developer
          </p>
          <p className="text-white font-normal text-[10px]">
            laurasmith.website
          </p>
        </div>
        <div className="flex justify-center gap-4 py-6">
          <Button icon="/icons/Mail.svg">Email</Button>
          <Button icon="/icons/linkedin.svg" styles="bg-blue-400 text-white">
            Linkedin
          </Button>
        </div>
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}
