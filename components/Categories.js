import Image from "next/image";
import Link from "next/link";


export default function Categories() {
  return (
    <section className="bg-white px-6 md:px-10 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <h2 className="text-4xl font-semibold leading-tight">
            Best <span className="text-primary">Delivered</span> <br />
            Categories
          </h2>

          <p className="max-w-sm text-lg text-gray-500 leading-relaxed">
            Here are some of our best distributed categories. If you want you
            can order from here.
          </p>
        </div>

        <div className="relative md:hidden">
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
            <div className="w-20 h-32 bg-gradient-to-l from-white to-transparent flex items-center justify-end pr-4">
            </div>
          </div>

          <div
            className="
      flex gap-10
      overflow-x-auto
      snap-x snap-mandatory
      scroll-smooth
      px-[calc((100vw-300px)/2)]
      pb-6
    "
          >
            <CategoryItem src="/assets/burger.png" title="Chicken Burger" />
            <CategoryItem src="/assets/pzza.png" title="Chicken Pizza" />
            <CategoryItem src="/assets/french2.png" title="French Fries" />
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-16">
          <CategoryItem src="/assets/burger.png" title="Chicken Burger" />
          <CategoryItem src="/assets/pzza.png" title="Chicken Pizza" />
          <CategoryItem src="/assets/french2.png" title="French Fries" />
        </div>
      </div>
    </section>
  );
}

function CategoryItem({ src, title }) {
  return (
    <div className="snap-center w-[300px] mx-auto flex flex-col items-center text-center">
      <div className="relative w-[260px] h-[260px] md:w-[300px] md:h-[300px] mb-6">
        <Image src={src} alt={title} fill className="object-contain" />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <Link href="/shop">
      <button className="mt-2 text-sm text-primary hover:underline">
        Order Now →
      </button>
      </Link>
      
    </div>
  );
}
