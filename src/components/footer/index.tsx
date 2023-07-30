import "tailwindcss/tailwind.css"
import Image from "next/image"
import wallpaper from '../../../public/img/wallpaper.jpg'
import React from "react"

export const Footer=()=>{
    return(
        <>
    <div className=" w-screen h-[30vh] sm:h-[35vh] bg-black border-b-[10px] border-black ">
        <Image src={wallpaper} alt='wallpaper' 
        className="w-[100%] opacity-10 h-[80%]" />
        <div className="flex items-center justify-center text-white w-[100%] h-[20%]">
            <p > <span>&cody;</span> 2023 Todo-List Júnior Mendes</p>
        </div>
    </div>
        </>
    )
}