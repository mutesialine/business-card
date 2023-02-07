import Button from "./components/ui/Button";
import React from "react";
export default function App() {
  return (
    <div className="bg-black w-[550px] max-w-[317px]  mt-60  mx-60 rounded-t-[10px]">
      <div className="max-w-[317px] mx-auto">
        <img
          src="/images/Rectangle 90.png"
          alt="profile"
          className="w-fit object-cover  "
        />
        <div className="flex justify-center gap-4 py-6">
          <Button icon="/icons/Mail.svg">Email</Button>
          <Button icon="/icons/linkedin.svg" styles="bg-blue-500 text-white">
            Linkedin
          </Button>
        </div>
      </div>
    </div>
  );
}
