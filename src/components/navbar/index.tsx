import "tailwindcss/tailwind.css"

import React from "react"
import Link from "next/link"
import {AiFillHome} from "react-icons/ai"


interface NavbarProps{
  className?:string
}
export const Navbar=(props:NavbarProps)=>{
    return(
    <>
        <div className={` ${props.className} sm:h-[100vh]  bg-blue-500 `}>
      
          <div className={`w-[100%]  `}>
                     <nav className="flex w-[100%] items-center text-[1rem] text-green-500 justify-center pt-5">
                        <ul className="flex sm:flex-col gap-1 flex-row items-center justify-center w-[100%]">
                          <li className="hover:bg-black bg-gray-700 text-white p-2 text-center rounded-2xl sm:w-[80%] w-[25%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl sm:w-[80%] w-[25%]">
                          <Link href="/video" className="flex items-center pl-2 gap-4"> <AiFillHome/> Video</Link>                            </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl sm:w-[80%] w-[25%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                        </ul>
                     </nav>
              I</div>
         
          
          <div className={`w-[100%] sm:flex hidden `}>
                     <nav className="flex w-[100%] items-center text-[1rem] text-green-500 justify-center pt-5">
                        <ul className="flex gap-1 flex-col items-center justify-center w-[100%]">
                          <li className="hover:bg-black bg-gray-700 text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/video" className="flex items-center pl-2 gap-4"> <AiFillHome/> Video</Link>                            </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                        </ul>
                     </nav>
              </div>
         
          
          <div className={`w-[100%] sm:flex hidden `}>
                     <nav className="flex w-[100%] items-center text-[1rem] text-green-500 justify-center pt-5">
                        <ul className="flex gap-1 flex-col items-center justify-center w-[100%]">
                          <li className="hover:bg-black bg-gray-700 text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/video" className="flex items-center pl-2 gap-4"> <AiFillHome/> Video</Link>                            </li>
                          <li className="hover:bg-black bg-gray-700  text-white p-2 text-center rounded-2xl w-[80%]">
                          <Link href="/" className="flex items-center pl-2 gap-4"> <AiFillHome/> Home</Link>                          </li>
                        </ul>
                     </nav>
              </div>
         
         
        </div>
    </>
    )
}