"use client"
import Tool from "./tool"
import getCollection from "@/utils/firebase";
import { useState, useEffect } from "react"

export default function Toolbox() {
    const [tool, setTool] = useState([]);

    useEffect(() => {
        async function getData() {
            //Get the tools as a list of document objects
            const data = await getCollection("tool");
            //update the state with the tools
            setTool(data);
        }
        getData();  
    }, []);

    return (
        <main 
        className="bg-white p-2 grid sm:grid-cols-2 md:grid-cols-3 gap-1 "
        >
            
                {tool.map((t, i) => {
                    return (
                        <Tool 
                        key = {i}
                        title = {t.title} 
                        description = {t.description} 
                        category = {t.category} 
                        />
                    )
                })}
        </main>
    )
    
}
