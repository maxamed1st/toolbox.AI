"use client"
import { useParams, useRouter } from "next/navigation";
import { getDocument } from "@/utils/firebase";
import { useEffect, useState, } from "react";

export default function presentTool() {
    const [tool, setTool] = useState({});
    const query = useParams().tool;
    const router = useRouter()
    
    useEffect(() => {
        async function getData() {
            //get data for the specific query
            const data = await getDocument(query);
            if (typeof data === "undefined") router.push("/not-found")
            //update the state with the tools
            setTool(data);
        }
        getData();  
    }, []);
    return (
        <main className="bg-white p-2 flex flex-col gap-1">
            <h1 className="text-center font-bold">{tool?.title}</h1>
            <p className="text-[1rem]">{tool?.longDescription}</p>
            <a href={tool?.websiteLink} target="_blank" className="self-center">
                <button className="bg-lime-800 hover:bg-lime-600 p-2 w-20 text-white rounded active:animate-ping">Visit tool</button>
            </a>
        </main>
    )
}
