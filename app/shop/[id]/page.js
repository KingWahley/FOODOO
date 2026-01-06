// "use client";

// import { useParams, useRouter } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";
// import { products } from "../../../components/shop/data";
// import { useCart } from "@/components/shop/CartContext";

// export default function ProductPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const { addToCart } = useCart();

//   const product = products.find(p => p.id === Number(id));
//   const [qty, setQty] = useState(1);

//   if (!product) {
//     return <p className="p-10 text-center">Product not found.</p>;
//   }

//   return (
//     <div className="min-h-screen bg-white px-4 py-6 md:py-16">
      
//       {/* Header */}
//       <div className="flex items-center justify-between mb-6 md:max-w-5xl md:mx-auto">
//         <button onClick={() => router.back()} className="text-xl">←</button>
//         <h2 className="font-medium">Order Details</h2>
//         <button className="text-xl text-red-500">❤</button>
//       </div>

//       {/* Content */}
//       <div className="md:max-w-5xl md:mx-auto md:grid md:grid-cols-2 md:gap-12">
        
//         {/* Image */}
//         <div className="relative aspect-square mb-8 md:mb-0">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>

//         {/* Info */}
//         <div>
//           <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//             {product.name}
//           </h1>

//           <div className="flex gap-4 text-sm text-gray-500 mb-6">
//             <span>⏱ 15 mins</span>
//             <span>🔥 320 kcal</span>
//             <span>⭐ 4.0</span>
//           </div>

//           <div className="flex items-center justify-between mb-8">
//             <p className="text-4xl font-bold">${product.price}</p>

//             <div className="flex items-center gap-4 bg-gray-100 rounded-full px-5 py-2">
//               <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
//               <span>{qty}</span>
//               <button onClick={() => setQty(q => q + 1)}>+</button>
//             </div>
//           </div>

//           <h3 className="font-semibold mb-2">About</h3>
//           <p className="text-gray-500 text-sm leading-relaxed">
//             {product.desc}
//           </p>

//           {/* Desktop button */}
//           <button
//             onClick={() => addToCart(product, qty)}
//             className="hidden md:block mt-8 w-full bg-black text-white py-4 rounded-full font-medium"
//           >
//             Add To Cart
//           </button>
//         </div>
//       </div>

//       {/* Mobile sticky button */}
//       <button
//         onClick={() => addToCart(product, qty)}
//         className="
//           md:hidden
//           fixed bottom-6 left-1/2 -translate-x-1/2
//           w-[90%] max-w-md
//           bg-black text-white
//           py-4 rounded-full
//           font-medium
//         "
//       >
//         Add To Cart
//       </button>
//     </div>
//   );
// }
