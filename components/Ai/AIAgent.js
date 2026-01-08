"use client";

import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2, Bot, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/shop/CartContext";
import { products } from "@/components/shop/data";

const NUMBER_WORDS = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

export default function AIAgent() {
  const { cart, addToCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const hasWelcomed = useRef(false);

  function toggleOpen() {
    setOpen((prev) => {
      const next = !prev;
      if (next && !hasWelcomed.current) {
        setMessages([
          {
            role: "assistant",
            content:
              "Hi, I am Vijan, your Foodle assistant. I can suggest meals or add items to your cart. What would you like?",
          },
        ]);
        hasWelcomed.current = true;
      }
      return next;
    });
  }

  useEffect(() => {
    if (open && window.innerWidth < 768) {
      setFullscreen(true);
    }
  }, [open]);

  function tryAddToCartFromText(text) {
    const lower = text.toLowerCase();

    let qty = 1;
    const num = lower.match(/\b\d+\b/);
    if (num) qty = parseInt(num[0], 10);
    else {
      for (const w in NUMBER_WORDS) {
        if (lower.includes(w)) qty = NUMBER_WORDS[w];
      }
    }

    const product =
      products.find((p) => lower.includes(p.name.toLowerCase())) ||
      products.find((p) => lower.includes(p.category.replace("-", " ")));

    if (product) {
      addToCart(product, qty);
      return `Added ${qty} ${product.name} to your cart.`;
    }

    return null;
  }

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userText = input;
    const newMessages = [...messages, { role: "user", content: userText }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      let reply = data.reply ?? "Sorry, I did not understand that.";

      const cartReply = tryAddToCartFromText(userText);
      if (cartReply) reply = cartReply;

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      <button
        onClick={toggleOpen}
        className="
          fixed bottom-4 left-6
          md:left-auto md:right-6
          md:bottom-auto md:top-5
          z-50 bg-black text-white
          px-4 py-3 rounded-full
          shadow-lg flex items-center gap-2
          hover:bg-gray-900 transition
        "
      >
        <Bot size={18} />
        AI Help
      </button>

      {open && (
        <div
          className={`fixed z-50 bg-white shadow-xl flex flex-col ${
            fullscreen
              ? "inset-0 rounded-none"
              : "bottom-24 left-6 w-80 max-h-[70vh] rounded-2xl"
          }`}
        >
          <div className="p-4 border-b flex items-center justify-between font-semibold">
            <span>Food Assistant</span>

            <div className="flex items-center gap-2">
              {totalItems > 0 && (
                <button
                  onClick={() => {
                    setOpen(false); // close AI
                    window.dispatchEvent(new Event("open-cart")); // open cart
                  }}
                  className="relative p-2 md:hidden rounded-full hover:bg-gray-100 text-gray-600"
                  aria-label="Open cart"
                >
                  <ShoppingCart size={18} />
                  <span
                    className="
                      absolute -top-1 -right-1
                      bg-orange-500 text-white
                      text-[10px] font-bold
                      w-5 h-5 rounded-full
                      flex items-center justify-center
                    "
                  >
                    {totalItems}
                  </span>
                </button>
              )}

              <button
                onClick={() => setFullscreen(!fullscreen)}
                className="hidden md:flex p-2 rounded-full hover:bg-gray-100 text-gray-600"
              >
                {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="p-1 text-gray-500 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-2 rounded-lg ${
                  m.role === "user" ? "bg-orange-100 ml-auto" : "bg-gray-100"
                }`}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <p className="text-gray-400 italic">
                typing<span className="animate-pulse">…</span>
              </p>
            )}
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 text-[16px]"
              placeholder="Ask something…"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-black text-white px-4 py-3 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
