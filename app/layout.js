import "./globals.css";
import { CartProvider } from "@/components/shop/CartContext";
import AIAgent from "@/components/Ai/AIAgent";

export const metadata = {
  title: "Foodle",
  description: "Online Food Ordering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CartProvider>
          {children}
          <AIAgent />
        </CartProvider>
      </body>
    </html>
  );
}
