import { Truck, RefreshCcw, BadgeCheck } from "lucide-react";

export default function Features() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-cream" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="relative px-4 md:px-10 -mt-16 pb-20">
        <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-md px-6 md:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Fast Delivery */}
            <div className="flex items-start gap-5">
              <div className="p-5 rounded-full bg-[#FFE3B3] flex items-center justify-center">
                <Truck className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Fast Delivery
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  The food will be delivered to your home within 1–2 hours of
                  your ordering.
                </p>
              </div>
            </div>

            {/* Fresh Food */}
            <div className="flex items-start gap-5">
              <div className="p-5 rounded-full bg-[#FFE3B3] flex items-center justify-center">
                <RefreshCcw className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Fresh Food
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Your food will be delivered 100% fresh to your home. We do not
                  deliver stale food.
                </p>
              </div>
            </div>

            {/* Free Delivery */}
            <div className="flex items-start gap-5">
              <div className="p-5 rounded-full bg-[#FFE3B3] flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Free Delivery
                </h4>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  Your food delivery is absolutely free. No cost. Just order and
                  enjoy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
