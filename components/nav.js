import Link from "next/link"
export default function Nav() {
    return (
    <nav className="[&>li]:list-none flex divide-x mt-2 w-full bg-lime-800 text-gray-200 rounded h-8">
        <li className="mr-auto h-full hover:bg-lime-600 hover:text-white hover:rounded-l px-2 py-1 border-r">
            <Link href="/" className="align-center"> Toolbox.AI </Link>
        </li>
        <li className="h-full hover:bg-lime-600 hover:text-white group relative flex flex-col cursor-pointer px-2 py-1">
            <div> Sort </div>
            <div className="hidden absolute top-8 left-0 group-hover:flex flex-col items-start bg-lime-800 rounded-b">
                <button className="hover:bg-lime-600 text-gray-200 hover:text-white w-full text-left border-y p-1">A-Z</button>
                <button className="hover:bg-lime-600 text-gray-200 hover:text-white p-1 rounded-b">Category</button>
            </div>
        </li>
        <li className="h-full hover:bg-lime-600 hover:text-white hover:rounded-r min-w-max px-2 py-1"> 
            <Link href="/newtool"> Add tool </Link>
        </li>
    </nav>
    )
}
