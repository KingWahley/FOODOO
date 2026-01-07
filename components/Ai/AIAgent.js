"use client";

import { useState, useRef } from "react";

export default function AIAgent() {
  const [open, setOpen] = useState(false);
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
              "Hi 👋 I’m Vijan your Foodle assistant. I can help you choose meals, suggest popular items, or guide your order. What are you craving?",
          },
        ]);
        hasWelcomed.current = true;
      }

      return next;
    });
  }

  async function sendMessage() {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];

    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.message ?? data.reply },
    ]);

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
        <div className="fixed bottom-24 left-6 w-80 max-h-[70vh] bg-white rounded-2xl shadow-xl flex flex-col z-50">
          <div className="p-4 border-b font-semibold">Food Assistant</div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  m.role === "user" ? "bg-orange-100 self-end" : "bg-gray-100"
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
              className="flex-1 border rounded-lg px-3 py-2 text-sm"
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
