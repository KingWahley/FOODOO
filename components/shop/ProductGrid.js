import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onAdd, onRemove, cartMap }) {
  if (products.length === 0) {
    return (
      <p className="mt-10 text-gray-500 text-center">No products found.</p>
    );
  }

  return (
    <div
      className="
    grid grid-cols-2
    gap-4 sm:gap-6
    md:grid-cols-3 md:gap-8
    items-stretch
  "
    >
      {products.map((p) => (
        <div key={p.id} className="h-full">
          <ProductCard
            product={p}
            inCart={cartMap?.[p.id]}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </div>
      ))}
    </div>
  );
}
