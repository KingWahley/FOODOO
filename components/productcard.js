import Image from "next/image";

export default function ProductCard({
  image,
  title,
  rating = 5,
  reviews,
  price,
}) {
  return (
    <div className="relative mt-10 w-[300px] h-[220px] bg-[#FFF1E6] rounded-2xl px-6 pt-20 pb-6 mx-auto">
      
      <div className="absolute top-[-48px] left-1/2 -translate-x-1/2">
        <div className="w-[120px] h-[120px] rounded-full border-[6px] border-primary bg-white overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between text-center">
        <div>
          <h4 className="text-base font-semibold">{title}</h4>

          <div className="mt-2 flex items-center justify-center gap-1 text-sm">
            <div className="text-yellow-400">
              {"★".repeat(rating)}
            </div>
            <span className="text-gray-500 text-xs">
              ({reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">{price}</span>
          <button className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
