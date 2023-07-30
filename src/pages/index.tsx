
import "tailwindcss/tailwind.css"

import { Layout } from '../components/layout/layout'
import { useState } from 'react'
import { Input } from '../components/input/input'
import {BsTrash} from "react-icons/bs"
import {BsFillPatchCheckFill} from "react-icons/bs"
import React from "react"


interface HomeProps{
  id:number
}
export default function Home(props:HomeProps) {
  const [todo, setTodo]=useState([{texto: 'Correr no park', id: Math.random()*10000, data: "23/09/23"}])
  const [text,setText]=useState('')
  const [date,setDate]=useState('')

 const handleClick=()=>{
  const list:any=[...todo]
  list.push({texto: text, id: Math.random()*10000, data: date})
  setTodo(list)
  setText('')
  setDate('')
 
 }
 const remove=(Id:number)=>{
  const filter = todo.filter((list)=> list.id !== Id)
  setTodo(filter)
 }

 

   return (
    <>
      <Layout className="flex flex-col w-screen min-h-[100vh] items-center">
         <div className=" relative z-40 top-[-150px] mb-[5rem] w-[80%] flex flex-col items-center justify-center">
           <form action="#" onSubmit={handleClick}
           className="flex  sm:flex-row flex-col items-center justify-center mt-[5rem] sm:w-[90%] w-[25rem] sm:h-[3rem] box-border">
            <Input className="border-[1px] outline-none pl-2 sm:w-[55%] w-[90%] h-[3.5rem]" type='text' placehoder='Digete sua atividade' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <div className="sm:w-[45%] w-[90%]">
              <Input className="border-[1px] text-center outline-none sm:w-[55%] w-[50%] px-1 h-[3.5rem]" type='date' placehoder='__/__/__' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
              <Input className="text-white sm:w-[45%] w-[50%]  h-[3.5rem] bg-gray-500 sm:rounded-br-[15px] sm:rounded-tr-[15px]" type='submit' />
            </div>
                   </form>
           <div className="flex items-center justify-center mt-[3rem] w-[100%] ">
            <ul className="flex rounded-xl sm:w-[70%] w-[95%] flex-col gap-3 items-center bg-gray-500 py-[1rem]">
              {
                todo.map(items=>(
                  <li key={items.id} className={`flex  rounded-lg items-center justify-around w-[95%]  bg-blue-400 min-h-[3.25rem] text-white`}>
                  <button className="bg-green-700"><BsFillPatchCheckFill/></button>
                  <span className="w-[50%] flex justify-center}">{items.texto}</span>
                  <span className="sm:w-[20%] w-[25%] flex justify-center">{items.data}</span>
                  <button onClick={()=>remove(items.id)!} className="my-2" ><BsTrash/></button></li>
                ))
              }
            </ul>
           </div>
         </div>
      </Layout> 
    </>
  )
}
