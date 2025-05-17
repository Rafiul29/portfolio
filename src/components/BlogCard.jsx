export default function BlogCard({ imgUrl, title, description }) {
  return (
    <div  className="">
      <div className="h-52 md:h-80 rounded-xl overflow-hidden">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="text-zinc-300 rounded-b-xl mt-3 bg-zinc-900 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}
