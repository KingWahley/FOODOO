import Image from "next/image";

export default function CartPanel({ cart, onUpdate, onRemove, open, onClose }) {
  const subtotal = cart.reduce((s, p) => s + p.price * p.qty, 0);

  return (
    <aside
      className={`
    fixed md:sticky
    bottom-0 md:top-0
    right-0
    w-full md:w-80
    h-[80vh] md:h-screen
    bg-white
    p-4 md:p-6
    shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:shadow-lg
    flex flex-col
    z-40
    rounded-t-2xl md:rounded-none
    transition-transform duration-300
    ${open ? "translate-y-0" : "translate-y-full md:translate-y-0"}
  `}
    >
      <div className="md:hidden flex justify-center mb-3">
        <div className="w-10 h-1.5 rounded-full bg-gray-300" />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Current Order</h2>

        <button onClick={onClose} className="md:hidden text-gray-500 text-xl">
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {cart.length === 0 && (
          <p className="text-sm text-gray-500 text-center mt-10">
            Your cart is empty
          </p>
        )}

        {cart.map((item) => (
          <div key={item.id} className="flex gap-3 items-center">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium leading-tight">{item.name}</p>
              <p className="text-orange-500 font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdate(item.id, -1)}
                className="w-6 h-6 rounded-md bg-orange-100 text-orange-500"
              >
                −
              </button>

              <span className="text-sm w-4 text-center">{item.qty}</span>

              <button
                onClick={() => onUpdate(item.id, 1)}
                className="w-6 h-6 rounded-md bg-orange-500 text-white"
              >
                +
              </button>
            </div>

            <button
              onClick={() => onRemove(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gray-50 rounded-xl p-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="border-t mt-3 pt-3 flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-4  w-full bg-orange-500 text-white py-3 rounded-xl font-medium">
        Continue to Payment
      </button>
    </aside>
  );
}
