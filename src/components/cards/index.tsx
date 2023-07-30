import React from "react"
import "tailwindcss/tailwind.css"

interface CardsProps{
    src: string
    title: string
    text?: string
}
export const Cards=(props:CardsProps)=>{
    return(
        <>
         <div className="flex sm:flex-col flex-row sm:w-[19rem] w-[90%] sm:h-[14rem] h-[8rem] ">
            <div className="sm:w-[100%] w-[70%] sm:h-[11rem] ">
            <iframe className={`rounded-lg hover:rounded-none w-[100%] h-[100%] `} src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
            </iframe>
            </div>
            <div className="w-[100%] sm:h-[3rem] flex sm:flex-row sm:gap-4 flex-col items-center justify-center ">
                <p className="text-[1.5rem] "> {props.title}</p>
                <p className="text-center"> {props.text}</p>
            </div>
         </div>
        
        </>
    )
}