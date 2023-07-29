import "tailwindcss/tailwind.css"
import { Cards } from "../components/cards";
import { Layout } from "../components/layout/layout";

export default function Video(){
    return(
        <>
        <Layout >
            <div className="w-[100vw] min-h-[100vh] flex items-center justify-center ">
                <div className="py-[5rem] w-[100%] min-h-[80vh] flex flex-wrap gap-[8px] sm:gap-5 items-center justify-center">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
            </div>
        </Layout>
        </>
    )
}