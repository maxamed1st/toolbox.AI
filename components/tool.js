import { useRouter } from "next/navigation";
export default function Tool({id, title, description, category}) {
    const router = useRouter()
    const handleClick = e => {
        router.push(id);
    }
    return (
    <article onClick={handleClick} className=" bg-gray-200 flex flex-col justify-between h-32 p-2 rounded overflow-hidden hover:scale-95 hover:ease-in-out cursor-pointer">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-xs -mt-1">{category}</div>
        <div>{description}</div>
    </article>
    )
}
