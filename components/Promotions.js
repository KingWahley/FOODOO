import Image from "next/image";

export default function Promotions() {
  return (
    <section className="bg-white px-10 py-24">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT – Large Promo */}
        <div className="relative col-span-1 lg:col-span-2 h-[320px] rounded-3xl overflow-hidden">
          <Image
            src="/assets/chips.jpg"
            alt="Burger Discount"
            fill
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute top-6 left-6 text-white">
            <h4 className="text-xl font-semibold">25% Discount</h4>
          </div>

          <div className="absolute top-6 right-6 bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
            $2.60
          </div>
        </div>

        {/* RIGHT – Stacked Promos */}
        <div className="flex flex-col gap-8">
          {/* Top Right */}
          <div className="relative h-[150px] rounded-3xl overflow-hidden bg-[#9C6A1A]">
            <Image
              src="/assets/dessert.jpg"
              alt="Dessert Offer"
              fill
              className="object-cover opacity-90"
            />

            <div className="absolute top-4 right-4 bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full">
              Save 20%
            </div>

            <div className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              $3.80
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative h-[150px] rounded-3xl overflow-hidden bg-[#FFD46B]">
            <Image
              src="/assets/tacos.jpg"
              alt="Tortilla Wrap Tacos"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute left-6 top-6">
              <h4 className="text-lg font-semibold text-white ">
                Tortilla Warp Tacos
              </h4>
              <p className="text-sm text-white">Get Your Order Fresh</p>
            </div>

            <div className="absolute right-6 top-6 bg-yellow-400 text-white text-lg font-semibold px-4 py-2 rounded-full">
              15% Off
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
