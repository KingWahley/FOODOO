import Image from "next/image";

export default function Categories() {
  return (
    <section className="bg-white px-10 py-10">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
          <h2 className="text-4xl font-semibold leading-tight">
            Best <span className="text-primary">Delivered</span> <br />
            Categories
          </h2>

          <p className="max-w-sm text-lg text-gray-500 leading-relaxed">
            Here are some of our best distributed categories. If you want you can order from here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          
          <div className="flex flex-col items-center text-center">
            <div className="relative w-[300px] h-[300px] mb-6">
              <Image
                src="/assets/burger.png"
                alt="Chicken Burger"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold">Chicken Burger</h4>
            <button className="mt-2 text-sm text-primary hover:underline">
              Order Now →
            </button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-[300px] h-[300px] mb-6">
              <Image
                src="/assets/pzza.png"
                alt="Chicken Pizza"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold">Chicken Pizza</h4>
            <button className="mt-2 text-sm text-primary hover:underline">
              Order Now →
            </button>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative w-[300px] h-[300px] mb-6">
              <Image
                src="/assets/french.png"
                alt="French Fries"
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-lg font-semibold">French Fries</h4>
            <button className="mt-2 text-sm text-primary hover:underline">
              Order Now →
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
}
