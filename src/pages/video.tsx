import "tailwindcss/tailwind.css"
import { Cards } from "../components/cards";
import { Layout } from "../components/layout/layout";
import { Input } from "../components/input/input";
import { useState } from "react";
import { Search } from "../components/search";

const videoBox=[
    {title:'nirvana', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'I wanna be yours', src:"https://www.youtube.com/embed/nyuo9-OjNNg"},
    {title:'Yellow', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'true love', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'nirvana', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'I wanna be yours', src:"https://www.youtube.com/embed/nyuo9-OjNNg"},
    {title:'Yellow', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'Yellow', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'Yellow', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'true love', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'The batman', src:"https://www.youtube.com/embed/4CnqZeUNioA"},
    {title:'cordele', src:"https://www.youtube.com/embed/VsxlqmSDmBU"},
    {title:'Nirv', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'Nirv', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'I love wou', src:"https://www.youtube.com/embed/nyuo9-OjNNg"},
    {title:'yel', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'True love', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'the b', src:"https://www.youtube.com/embed/4CnqZeUNioA"},
    {title:'Cordel', src:"https://www.youtube.com/embed/VsxlqmSDmBU"},
    {title:'true love', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'The batman', src:"https://www.youtube.com/embed/4CnqZeUNioA"},
    {title:'cordele', src:"https://www.youtube.com/embed/VsxlqmSDmBU"},
    {title:'Nirv', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'I love wou', src:"https://www.youtube.com/embed/nyuo9-OjNNg"},
    {title:'yel', src:"https://www.youtube.com/embed/yKNxeF4KMsY"},
    {title:'True love', src:"https://www.youtube.com/embed/W2QeQ9ZufAk"},
    {title:'the b', src:"https://www.youtube.com/embed/4CnqZeUNioA"},
    {title:'Cordel', src:"https://www.youtube.com/embed/VsxlqmSDmBU"},
   
]
export default function Video(){
    const [search, setSearch]=useState('')
    const filterVideos= videoBox.filter(data=>data.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    return(
        <>
         <Search>
               <form className="absolute rounded-bl-[10px] flex items-center justify-center rounded-tl-[10px] top-[10px] w-[90%] h-[2.5rem]">
                    <Input type="search" value={search} onChange={e=>{setSearch(e.target.value)}} className=" outline-none pl-5 rounded-bl-[10px] rounded-tl-[10px] w-[70%] h-[100%]"/>
                    <Input type="submit"  className=" bg-gray-500 hover:cursor-pointer hover:text-white hover:bg-gray-700 rounded-br-[10px] rounded-tr-[10px] sm:w-[10%] w-[20%] h-[100%]"/>
                </form>
        </Search>
        <Layout>
            <div className=" min-h-[100vh] flex flex-col items-center justify-center ">
              
                <div className="py-[5rem] w-[100%] min-h-[70vh] flex flex-wrap gap-[8px] sm:gap-5 items-center justify-center">
                    { filterVideos.map(data=>(
                      // eslint-disable-next-line react/jsx-key
                      <Cards title={data.title} src={data.src} text="jjjjjj"/>)
                      )
                    }
                </div>
            </div>
        </Layout>
        </>
    )
}