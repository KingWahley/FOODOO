import Image from "next/image";


export default function ProductCard({
  product,
  onAdd,
  onRemove,
  inCart,
}) {
  const isInCart = Boolean(inCart);

  function handleClick() {
    if (isInCart) {
      onRemove(product.id);
    } else {
      onAdd(product);
    }
  }

  return (
    <div className="
      bg-white rounded-2xl
      p-3 md:p-4
      shadow-sm hover:shadow-md
      transition relative
    ">
      {/* Image */}
      <div className="relative h-32 md:h-40 mb-3 md:mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />

        {/* Toggle Add / Remove */}
        <button
          onClick={handleClick}
          className={`
            absolute top-2 right-2
            px-3 py-2
            rounded-lg text-xs font-medium
            shadow transition-all duration-200
            ${
              isInCart
                ? "bg-red-500 text-white hover:scale-105 active:scale-95"
                : "bg-white text-gray-800 hover:scale-105 active:scale-95"
            }
          `}
        >
          {isInCart ? `✕ Remove (${inCart})` : "🛒 Add"}
        </button>
      </div>

      {/* Info */}
      <h3 className="font-semibold text-sm md:text-base leading-tight">
        {product.name}
      </h3>

      {product.desc && (
        <p className="text-xs md:text-sm text-gray-500 mt-1 line-clamp-2">
          {product.desc}
        </p>
      )}

      {/* Price */}
      <p className="mt-2 text-orange-500 font-semibold text-sm md:text-base">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
