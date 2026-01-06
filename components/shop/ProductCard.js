import Image from "next/image";

export default function ProductCard({ product, onAdd }) {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-3 md:p-4
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      {/* Image */}
      <div className="relative h-32 md:h-40 mb-3 md:mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-xl"
        />

        {/* Add to cart */}
        <button
          onClick={() => onAdd(product)}
          className="
            absolute top-2 right-2
            bg-white
            p-2
            rounded-lg
            shadow
            active:scale-95
            transition
          "
          aria-label="Add to cart"
        >
          🛒
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
