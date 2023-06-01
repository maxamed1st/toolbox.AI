"use client"
import Tool from "./tool"
import { sortContext } from "@/utils/context";
import { useState, useEffect, useContext } from "react"
import { sortDocs } from "@/utils/firebase";

export default function Toolbox() {
    const [tool, setTool] = useState([]);
    const {sortBy} = useContext(sortContext);

    useEffect(() => {
        async function getData() {
            //Get the tools as a list of document objects
            const data = await sortDocs("tools", sortBy);
            //update the state with the tools
            setTool(data);
        }
        getData();  
    }, [sortBy]);

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
