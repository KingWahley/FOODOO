import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-[#f4f5f7] px-4 py-16 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The story behind {""}
            <br className="hidden  md:block" />
            our kitchen
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            From classic favorites to modern culinary creations, our menu is
            designed with intention. Every dish is prepared using fresh
            ingredients, traditional techniques, and a passion for flavor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-24">
          <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden bg-white">
            <Image
              src="/assets/about-1.webp"
              alt="Fresh ingredients"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Fresh, locally sourced ingredients
            </h3>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              We work closely with trusted local suppliers to ensure every
              ingredient meets our quality standards. Freshness is not a
              feature, it is our foundation.
            </p>

            <Link href="/shop">
              <button className="mt-8 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-500 transition">
                View Menu
                <span className="text-lg">→</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Crafted with care and passion
            </h3>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Our chefs focus on balance, technique, and presentation. Every
              plate is carefully assembled to deliver a consistent and memorable
              dining experience.
            </p>
          </div>

          <div className="order-1 md:order-2 relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden bg-white">
            <Image
              src="/assets/about-2.png"
              alt="Plated meals"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
