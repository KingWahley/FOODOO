"use client";

import { useState, useMemo } from "react";
import TopBar from "./TopBar";
import ProductGrid from "./ProductGrid";
import CartPanel from "./CartPanel";
import { products } from "./data";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/shop/CartContext";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);

  const { cart, addToCart, removeFromCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        category === "all" ||
        category === "signature" ||
        p.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const cartMap = useMemo(() => {
    const map = {};
    cart.forEach((item) => {
      map[item.id] = item.qty;
    });
    return map;
  }, [cart]);

  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="mx-auto max-w-7xl">
        <div className="md:flex md:gap-8">
          <main className="flex-1 px-4 py-6 md:px-8 md:py-8">
            <TopBar
              search={search}
              onSearch={setSearch}
              activeCategory={category}
              onCategoryChange={setCategory}
            />

            <ProductGrid
              products={filteredProducts}
              onAdd={addToCart}
              onRemove={removeFromCart}
              cartMap={cartMap}
            />
          </main>

          <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </div>

      {cart.length > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="
    fixed bottom-24 left-6
    md:hidden
    bg-orange-500 text-white
    w-14 h-14
    rounded-full
    shadow-lg
    flex items-center justify-center
    z-50
  "
          aria-label="Open cart"
        >
          <ShoppingCart size={22} />

          {cart.length > 0 && (
            <span
              className="
        absolute -top-1 -right-1
        bg-white text-orange-500
        text-xs font-bold
        w-5 h-5
        rounded-full
        flex items-center justify-center
      "
            >
              {cart.length}
            </span>
          )}
        </button>
      )}

      <Footer />
    </div>
  );
}
