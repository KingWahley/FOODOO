export default function TopBar({
  search,
  onSearch,
  activeCategory,
  onCategoryChange,
}) {
  const categories = [
    { label: "Signature", value: "signature", icon: "✶" },
    { label: "Croissant", value: "croissant", icon: "🥐" },
    { label: "Waffle", value: "waffle", icon: "🧇" },
    { label: "Coffee", value: "coffee", icon: "☕" },
    { label: "Ice Cream", value: "ice-cream", icon: "🍨" },
  ];

  return (
    <div
      className="
        sticky top-0 z-10
        bg-white
        px-4 md:px-6
        py-4 md:py-5
        mb-4 md:mb-5
      "
    >
      <p className="text-gray-500 text-sm md:text-base">
        Discover whatever you need easily
      </p>

      <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4">
        <div className="flex mt-4 items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm flex-1">
          <span className="text-gray-400">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search product..."
            className="
              w-full outline-none
              text-sm md:text-base
              text-gray-700
              placeholder-gray-400
            "
          />
        </div>

        {/* Filter button (icon-only on mobile) */}
        <button
          className="
            w-11 h-11 md:w-12 md:h-12
            bg-white rounded-xl shadow-sm
            flex items-center justify-center
            text-gray-500
          "
        >
          ⚲
        </button>
      </div>

      {/* Categories */}
      <div
        className="
          mt-4 md:mt-6
          flex gap-3 md:gap-4
          overflow-x-auto
          pb-1
          -mx-4 px-4 md:mx-0 md:px-0
        "
      >
        {categories.map((cat) => (
          <CategoryButton
            key={cat.value}
            icon={cat.icon}
            label={cat.label}
            active={activeCategory === cat.value}
            onClick={() => onCategoryChange(cat.value)}
          />
        ))}
      </div>
    </div>
  );
}

function CategoryButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2
        px-4 md:px-5 py-2
        rounded-xl
        text-xs md:text-sm
        font-medium
        transition
        shrink-0
        ${
          active
            ? "bg-orange-500 text-white shadow-sm"
            : "bg-white text-gray-600 shadow-sm hover:bg-gray-50"
        }
      `}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}
