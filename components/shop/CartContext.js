// "use client";

// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cart, setCart] = useState([]);

//   function addToCart(product, qty = 1) {
//     setCart(prev => {
//       const found = prev.find(p => p.id === product.id);
//       if (found) {
//         return prev.map(p =>
//           p.id === product.id
//             ? { ...p, qty: p.qty + qty }
//             : p
//         );
//       }
//       return [...prev, { ...product, qty }];
//     });
//   }

//   function removeFromCart(id) {
//     setCart(prev => prev.filter(p => p.id !== id));
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }
