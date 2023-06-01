'use client'
import Link from "next/link";
import { useContext, useState } from "react";
import { sortContext } from "@/utils/context";

export default function Nav() {
  const { sortBy, updateContext } = useContext(sortContext);
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const toggleVisibility = e => setIsDropDownActive(!isDropDownActive);
  const handleCategory = e => {
    toggleVisibility();
    updateContext("category");
  };
  const handleTitle = e => {
    toggleVisibility();
    updateContext("title");
  };

  return (
    <nav className="[&>li]:list-none flex divide-x mt-2 w-full bg-lime-800 text-gray-200 rounded-t h-8">
      <li className="mr-auto h-full hover:bg-lime-600 hover:text-white hover:rounded-tl px-2 py-1 border-r">
        <Link href="/" className="align-center"> Toolbox.AI </Link>
      </li>
      <li className="h-full hover:bg-lime-600 hover:text-white relative flex flex-col cursor-pointer px-2 py-1">
        <div onClick={toggleVisibility}> Sort </div>
        <div className={`${isDropDownActive ? 'flex' : 'hidden'} absolute top-8 left-0 flex-col items-start bg-lime-800 rounded-b`}>
          <button onClick={handleTitle} className="hover:bg-lime-600 text-gray-200 hover:text-white w-full text-left border-y p-1">Name</button>
          <button onClick={handleCategory} className="hover:bg-lime-600 text-gray-200 hover:text-white p-1 rounded-b">Category</button>
        </div>
      </li>
      <li className="h-full hover:bg-lime-600 hover:text-white hover:rounded-tr min-w-max px-2 py-1">
        <Link href="/newtool"> Add tool </Link>
      </li>
    </nav>
  );
}
