"use client"
import Tool from "./tool"
import { sortContext } from "@/utils/context";
import { useState, useEffect, useContext } from "react"
import { getData as getFromDB } from "@/utils/firebase";

export default function Toolbox() {
    const [tool, setTool] = useState([]);
    const {sortBy} = useContext(sortContext);

    useEffect(() => {
        async function getData() {
            //Get the tools as a list of document objects
            const data = await getFromDB("tools", sortBy);
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
                    id = {t[0]}
                    title = {t[1].title} 
                    description = {t[1].shortDescription} 
                    category = {t[1].category}
                    />
                )
            })}
        </main>
    )
}
