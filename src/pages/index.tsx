
import "tailwindcss/tailwind.css"

import { Layout } from '../components/layout/layout'
import { useEffect, useState } from 'react'
import { Input } from '../components/input/input'
import {BsTrash} from "react-icons/bs"
import {BsFillPatchCheckFill} from "react-icons/bs"
import React from "react"
import { Search } from "../components/search"
import { todo } from "node:test"


interface HomeProps{
  id:number
}
export default function Home(props:HomeProps) {
  
  const [todo, setTodo]=useState([
    {texto: 'correr', id: Math.random()*10000, data: '23-06-2023'},
    {texto: 'correr', id: Math.random()*10000, data: '23-06-2023'},
    {texto: 'correr', id: Math.random()*10000, data: '23-06-2023'},
  ])
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
     <Search className="relative" >
          <form action="#" onSubmit={handleClick}
           className="absolute flex items-center justify-center top-[10px] w-[90%] h-[2.5rem] box-border">
            <Input className="border-[1px] rounded-bl-[15px] rounded-tl-[15px] outline-none pl-2 w-[55%] h-[100%]" type='text' placehoder='Digete sua atividade' value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <div className="w-[45%] h-[100%]">
              <Input className="border-[1px] text-center outline-none w-[55%]  px-1 h-[100%]" type='date' placehoder='__/__/__' value={date} onChange={(e)=>{setDate(e.target.value)}}/>
              <Input className="text-white w-[45%]  h-[100%] bg-gray-500 rounded-br-[15px] rounded-tr-[15px]" type='submit' />
            </div>
          </form>
      </Search>   
      <Layout className="flex flex-col  w-screen min-h-[100vh] items-center">
         <div className=" mb-[5rem] w-[80%] flex flex-col items-center justify-center">

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
