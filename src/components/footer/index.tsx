import "tailwindcss/tailwind.css"
import Image from "next/image"
import wallpaper from '../../../public/img/wallpaper.jpg'

export const Footer=()=>{
    return(
        <>
    <div className=" w-screen min-h-[40vh] bg-black border-b-[10px] border-black ">
        <Image src={wallpaper} alt='wallpaper' 
        className="w-[100%] opacity-10" />
        <div className="flex items-center justify-center text-white w-[100%] ">
            <p >&cody; 2023 Todo-List Júnior Mendes</p>
        </div>
    </div>
        </>
    )
}