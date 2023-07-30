import "tailwindcss/tailwind.css"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import wallpaper from "../../../public/img/wallpaper.jpg"

interface NavbarProps{
  className:string
}
export const Navbar=(props:NavbarProps)=>{
    return(
    <>
        <div className={`w-screen ${props.className} bg-blue-500 h-[45vh] z-10 relative`}>
                <Image src={wallpaper} alt='wallpaper' 
                className=" w-[100%] h-[100%] absolute z-10" />
                   <nav className=" absolute left-[20px] z-50 sm:left-[150px] flex items-center text-[1rem] text-green-500 justify-center pt-5">
                      <ul className="flex gap-1 ">
                        <li className="bg-black hover:bg-gray-500 hover:text-white p-2 text-center rounded-bl-[15px] rounded-tl-[15px] w-[6.5rem]"><Link href="/">Home</Link></li>
                        <li className="bg-black hover:bg-gray-500 hover:text-white p-2 text-center w-[6.5rem]"><Link href="/video">Vídeo</Link></li>
                        <li className="bg-black hover:bg-gray-500 hover:text-white p-2 text-center rounded-br-[15px] rounded-tr-[15px] w-[6.5rem]"><Link href="/">Sair</Link></li>
                      </ul>
                   </nav>
            </div>
    </>
    )
}