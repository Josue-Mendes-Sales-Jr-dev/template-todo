import "tailwindcss/tailwind.css"
import React from "react"
import {RxHamburgerMenu} from "react-icons/rx"


interface SearchProps{
    children?:React.ReactNode
    handleClick?: ()=> void
    className?: string
}
export const Search=(props:SearchProps)=>{
    return(
        <>
    <div className="w-screen flex items-center justify-center h-[60px] bg-blue-500">
        <button
        className="w-[20%] pl-5"
         onClick={props.handleClick}><RxHamburgerMenu/>
         </button>
        <div className={`w-[60%] h-[100%] relative ${props.className}`}>
            {props.children}
        </div>
        <h1 className="w-[20%] flex items-center justify-center">
        junior
       </h1>
        </div>
        </>
    )
}