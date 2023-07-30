import "tailwindcss/tailwind.css"
import { Footer } from "../footer"
import React from "react"
import { Navbar } from "../navbar"

interface LayoutProps{
    className?: string
    children?: React.ReactNode
}
export const Layout=(props:LayoutProps)=>{
    return(
        <>
        <div className=" flex flex-col w-screen min-h-[100vh]">
           <Navbar className="relative z-40"/>
            <div className={`mb-2 w-screen top-[75px] ${props.className}`}>
                {
                    props.children
                }

            </div>
            <Footer/>
        </div>
        </>
    )
}