"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Plus, Minus, Trash } from "lucide-react";
import { useCart } from "@/components/shop/CartContext";
import { products } from "@/components/shop/data";

export default function CheckoutPage() {
  const { cart, addToCart, removeFromCart, updateQty } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const relatedItems = products
    .filter(
      (p) =>
        !cart.some((c) => c.id === p.id) &&
        cart.some((c) => c.category === p.category)
    )
    .slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-6 md:py-10">
        <h1 className="text-2xl sticky top-16 p-4 bg-gray-50 z-20 font-semibold mb-6">
          Checkout
        </h1>

        <div className="md:grid md:grid-cols-3 md:gap-8">
          <section className="md:col-span-2 space-y-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty.
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm"
                >
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <Trash size={16} />
                  </button>
                </div>
              ))
            )}

            {relatedItems.length > 0 && (
              <section className="pt-8">
                <h3 className="text-base font-semibold mb-3">
                  You may also like
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {relatedItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl p-2 shadow-sm"
                    >
                      <div className="relative h-20 md:h-24 mb-2">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>

                      <h4 className="text-xs font-medium leading-tight line-clamp-2">
                        {item.name}
                      </h4>

                      <p className="text-[11px] text-gray-500 mt-0.5">
                        ${item.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() => addToCart(item)}
                        className="mt-2 text-[11px] text-orange-500 font-medium"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </section>

          {cart.length === 0 ? (
              <p className="">
               
              </p>
            ) : (
              <aside
            className="
              mt-8
              sticky bottom-0
              md:static md:mt-0
              bg-white
              rounded-2xl
              p-6
              shadow-sm
              h-fit
            "
          >
            <h3 className="font-semibold mb-4">
              Order Summary
            </h3>

            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-full font-medium">
              Place Order
            </button>
          </aside>
              )}
        </div>
      </main>
    </div>
  );
}
 
