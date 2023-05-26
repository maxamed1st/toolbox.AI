export default function Tool({title, description, category}) {
    return (
    <article className=" bg-gray-200 flex flex-col justify-between md:w-1/3 p-1 rounded hover:scale-105 overflow-auto cursor-pointer">
        <div className="text-2xl font-bold">{title}</div>
        <div>{description}</div>
        <div className="self-end">{category}</div>
    </article>
    )
}
