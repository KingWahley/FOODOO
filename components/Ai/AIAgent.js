"use client";

import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2 } from "lucide-react";

export default function AIAgent() {
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
              "Hi 👋 I’m Vijan, your Foodle assistant. I can help you choose meals, suggest popular items, or guide your order. What are you craving?",
          },
        ]);
        hasWelcomed.current = true;
      }

      return next;
    });
  }

  // Auto fullscreen on mobile
  useEffect(() => {
    if (open && window.innerWidth < 768) {
      setFullscreen(true);
    }
  }, [open]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];

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

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.message ?? data.reply ?? "Sorry, I didn’t get that.",
        },
      ]);
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
        className="fixed bottom-6 left-6 z-50 bg-black text-white px-4 py-3 rounded-full shadow-lg"
      >
        🤖 AI Help
      </button>

      {open && (
        <div
          className={`
            fixed z-50 bg-white shadow-xl flex flex-col
            ${
              fullscreen
                ? "inset-0 rounded-none"
                : "bottom-24 left-6 w-80 max-h-[70vh] rounded-2xl"
            }
          `}
        >
          <div className="p-4 border-b flex items-center justify-between font-semibold">
            <span>Food Assistant</span>
            <div className="flex gap-3 text-sm">
              <button
                onClick={() => setFullscreen(!fullscreen)}
                className="hidden md:flex p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition"
                aria-label={fullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {fullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>

              <button
                onClick={() => setOpen(false)}
                className="p-1 text-gray-500 hover:text-black transition"
                aria-label="Close chat"
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
              className="bg-black text-white px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
