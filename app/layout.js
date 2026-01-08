"use client";

import "./globals.css";
import { CartProvider } from "@/components/shop/CartContext";
import CartPanel from "@/components/shop/CartPanel";
import AIAgent from "@/components/Ai/AIAgent";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const openCart = () => setCartOpen(true);
    window.addEventListener("open-cart", openCart);
    return () => window.removeEventListener("open-cart", openCart);
  }, []);

  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}

          {cartOpen && (
            <CartPanel
              open
              onClose={() => setCartOpen(false)}
            />
          )}

          <AIAgent />
        </CartProvider>
      </body>
    </html>
  );
}
