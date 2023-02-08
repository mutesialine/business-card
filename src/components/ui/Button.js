import React from "react"
export default function Button({children, icon ,styles}){
  return (
    <button
      className={`text-black px-4 py-2 rounded-md bg-white flex gap-2 items-center ${styles}`}
    >
      <img src={icon} alt="icon" className="w-4" />
      <p>{children}</p>
    </button>
  );
}