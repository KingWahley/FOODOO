// "use client";

// import { createContext, useContext, useState, useMemo } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   function addToCart(product, qty = 1) {
//     setCart((prev) => {
//       const found = prev.find((p) => p.id === product.id);
//       if (found) {
//         return prev.map((p) =>
//           p.id === product.id ? { ...p, qty: p.qty + qty } : p
//         );
//       }
//       return [...prev, { ...product, qty }];
//     });
//   }

//   function removeFromCart(id) {
//     setCart((prev) => prev.filter((p) => p.id !== id));
//   }

//   const cartSummary = useMemo(() => {
//     return cart.map((item) => ({
//       name: item.name,
//       qty: item.qty,
//       price: item.price,
//     }));
//   }, [cart]);

//   const totalItems = useMemo(
//     () => cart.reduce((sum, item) => sum + item.qty, 0),
//     [cart]
//   );

//   const totalPrice = useMemo(
//     () => cart.reduce((sum, item) => sum + item.qty * item.price, 0),
//     [cart]
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         cartSummary,   
//         totalItems,    
//         totalPrice,    
//         addToCart,
//         removeFromCart,
//       }}
//     >
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }
