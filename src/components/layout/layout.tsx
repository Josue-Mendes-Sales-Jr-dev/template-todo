import "tailwindcss/tailwind.css"
import React from "react"
import { Navbar } from "../navbar"

 
interface LayoutProps{
    className?: string
    children?: React.ReactNode
}
export const Layout=(props:LayoutProps)=>{
    return(
        <>
        <div className="  flex flex-col sm:flex-row w-[100vw] min-h-[100vh]">
                <Navbar className="h-[100vh] w-[20%] sm:block hidden"/>
                <div className={`w-[80%]"  overflow-auto max-h-[90vh] w-[100%] top-[75px] ${props.className}`}>
                    {
                        props.children
                    }
                </div>
                <Navbar className=" sm:hidden" />
        </div>
        </>
    )
}