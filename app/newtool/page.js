'use client'
import { useState } from "react"
export default function newTool(handleSubmit) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    return (
        <main>
            <form className="flex flex-col content-center items-center gap-1 [&>*]:w-2/3">
                <label className="text-slate-900 text-xs -mb-1"> Name of the tool </label>
                <input type="text" onChange={e => setTitle(e.target.value)}  value={title} required
                className="focus:outline-lime-600 border-2 rounded border-lime-800"/>
                <label className="text-slate-900 text-xs -mb-1"> Description </label>
                <textarea rows="7" cols="10" onChange={e => setDescription(e.target.value)} value={description} required
                className="focus:outline-lime-600 border-2 rounded border-lime-800 resize-none overflow-auto"/>
                <label className="text-slate-900 text-xs -mb-1"> Category </label>
                <input type="text-area" onChange={e => setCategory(e.target.value)} value={category} autoComplete="on"
                className="focus:outline-lime-600 border-2 rounded border-lime-800"/>
                <button type="submit" onClick={handleSubmit} 
                className="bg-lime-600 hover:bg-lime-800 text-white font-bold py-2 px-4 rounded !w-[130px] mt-2"> Submit </button> 
            </form>
        </main>
    )
}
