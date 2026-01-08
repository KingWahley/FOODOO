import Image from "next/image";
import Link from "next/link";
import Parallax from "./Parallax2";
export default function Hero() {
  
  return (
    <section className="bg-cream px-10 pt-10 pb-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center  gap-20">
        <div>
          <h1 className="sm:text-[60px] text-[40px] leading-tight font-bold text-primary">
            All Fast Food is <br /> Available at Foodle
          </h1>

          <div className="mt-6 flex items-center gap-3 text-sm text-gray-500 max-w-md">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
            <p>
              We Are Just A Click Away When You Crave For Delicious Fast Food
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/shop"
              className="flex items-center gap-3 bg-primary text-white px-2 w-40 py-3 rounded-full text-sm font-medium shadow-sm hover:opacity-90 transition"
            >
              <span className="w-6 h-6 p-4 rounded-full bg-white/20 flex items-center justify-center">
                🛍️
              </span>
              Eat Now
            </Link>
            <Link href="https://youtube.com/shorts/tcTXldE1xls?si=QhUY6RVGn-7nAadt">
              <button className="flex border border-primary rounded-full p-2 items-center gap-3 text-sm font-medium text-gray-700  hover:text-primary transition">
                <span className="w-10 h-10 rounded-full border border-primary shadow-lg flex items-center justify-center text-primary">
                  ▶
                </span>
                How To Order
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-end ">
          <Parallax speed={0.45}>
            <div className="relative w-[420px] h-[420px]">
              <Image
                src="/assets/hero.png"
                alt="Food illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}
