export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import { products } from "@/components/shop/data";

const SYSTEM_PROMPT = `
Your name is Vijan and you are a friendly food ordering assistant for the Foodle restaurant.

Strict rules you must follow:
- Do not use asterisks
- Do not use markdown or formatting symbols
- Do not use emojis or decorative characters
- Do not use long dashes or stylized punctuation
- Do not bold, italicize, or decorate text
- Use plain text only

Behavior rules:
- Only talk about items that exist on the Foodle menu
- Never invent menu items or prices
- If asked what is available, list menu items clearly by category
- If asked for recommendations, suggest items from the menu
- Ask clarifying questions when needed

Style rules:
- Keep responses short, clear, and helpful
- Use simple sentences
- Use calm, polite, conversational tone

When the user clearly asks to add an item to the cart, you MUST respond
using the exact command format below on its own line:

ADD_TO_CART: <exact product name>

Example:
User: Add a caramel latte
Assistant:
Sure. I have added it to your cart.
ADD_TO_CART: Caramel Latte

Only use product names that exist on the menu.
Never invent items.


`;

function formatMenu(products) {
  return products
    .map(
      (p) =>
        `Name: ${p.name}. Category: ${p.category}. Price: $${p.price}. Description: ${p.desc}.`
    )
    .join("\n");
}

function cleanAIReply(text) {
  return text
    .replace(/\*/g, "")
    .replace(/_/g, "")
    .replace(/`/g, "")
    .replace(/#{1,6}\s?/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      temperature: 0.35,
      max_tokens: 350,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "system",
          content:
            "This is the full Foodle menu. Only use these items:\n" +
            formatMenu(products),
        },
        ...messages,
      ],
    });

    const rawReply = completion.choices[0].message.content || "";
    const reply = cleanAIReply(rawReply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI ERROR:", error);
    return NextResponse.json(
      { error: "AI service failed. Please try again." },
      { status: 500 }
    );
  }
}
