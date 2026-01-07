import ProductCard from "./productcard";
import Link from "next/link";

export default function Menu() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-6xl font-semibold">
              Our <span className="text-primary">Regular</span> Menu
            </h2>
            <p className="mt-5 max-w-sm text-lg text-gray-500">
              These are our regular menus. You can order anything you like.
            </p>
          </div>
          <Link href="/shop">
            <button className="bg-primary text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition">
              See All
            </button>
          </Link>
        </div>

        <div className="relative md:hidden">
          <div
            className="
      flex gap-12
      overflow-x-auto
      snap-x snap-mandatory
      scroll-smooth
      pb-6
      scroll-px-[calc((100vw-240px)/2)]
    "
          >
            <div className="snap-center shrink-0 w-[240px] ">
              <Link href={"/shop"}>
                <ProductCard
                  image="/assets/burger.png"
                  title="Chicken Burger"
                  rating={5}
                  reviews={160}
                  price="$3.50"
                />
              </Link>
            </div>

            <div className="snap-center shrink-0 w-[240px]">
              <Link href={"/shop"}>
                <ProductCard
                  image="/assets/chpz.png"
                  title="Chicken Pizza"
                  rating={5}
                  reviews={142}
                  price="$4.20"
                />
              </Link>
            </div>

            <div className="snap-center shrink-0 w-[240px]">
              <Link href={"/shop"}>
                <ProductCard
                  image="/assets/chk.png"
                  title="Chicken Fry"
                  rating={5}
                  reviews={123}
                  price="$5.00"
                />
              </Link>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-16 items-start">
          <Link href={"/shop"}>
            {" "}
            <ProductCard
              image="/assets/burger.png"
              title="Chicken Burger"
              rating={5}
              reviews={160}
              price="$3.50"
            />
          </Link>

          <Link href={"/shop"}>
            <ProductCard
              image="/assets/chpz.png"
              title="Chicken Pizza"
              rating={5}
              reviews={142}
              price="$4.20"
            />
          </Link>

          <Link href={"/shop"}>
            <ProductCard
              image="/assets/chk.png"
              title="Chicken Fry"
              rating={5}
              reviews={123}
              price="$5.00"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
