"use client";

import { useState, useMemo } from "react";
import TopBar from "./TopBar";
import ProductGrid from "./ProductGrid";
import CartPanel from "./CartPanel";
import { products } from "./data";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function ShopPage() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);

  function removeFromCart(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function updateQty(id, delta) {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty + delta } : p))
        .filter((p) => p.qty > 0)
    );
  }

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

          <CartPanel
            cart={cart}
            onUpdate={updateQty}
            onRemove={removeFromCart}
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          />
        </div>
      </div>

      {cart.length > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="
      fixed bottom-20 right-4
      md:hidden
      bg-orange-500 text-white
      px-5 py-3
      rounded-full
      shadow-lg
      font-medium
      z-50
      
    "
        >
          View Cart ({cart.length})
        </button>
      )}

      <Footer />
    </div>
  );
}
