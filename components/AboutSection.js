import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#eef4f8] px-4 py-14 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Dine with Us?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            From classic favorites to modern culinary creations, our menu is
            designed to tantalize your taste buds. Every dish is made with the
            freshest ingredients and an extra dash of love.
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#eef0ff] rounded-3xl p-6 flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <Image
                src="/assets/about-1.webp"
                alt="Fresh food"
                fill
                className="object-cover  rounded-2xl"
              />
            </div>
          </div>

          <div className="bg-[#eef0ff] rounded-3xl shadow-lg p-6 md:p-10 flex flex-col justify-center">
            <span className="text-blue-600 text-lg mb-3">💙</span>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Fresh, Locally Sourced Ingredients.
            </h3>
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              We use only the freshest ingredients & traditional recipes to
              ensure each dish is a masterpiece.
            </p>
            <Link href="/shop">
              <button className="mt-6 w-fit bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                View Shop →
              </button>
            </Link>
          </div>

          <div className="bg-[#ffe6cf] rounded-3xl p-6 shadow-lg flex items-center justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <Image
                src="/assets/about-2.png"
                alt="Plated meals"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="bg-[#ffe6cf] rounded-3xl p-6 md:p-10 flex flex-col justify-center">
            <span className="text-orange-600 text-lg mb-3">✨</span>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              Crafted with Care & Passion.
            </h3>
            <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
              Every plate is thoughtfully prepared by chefs who care deeply
              about flavor, balance, and presentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
