export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const SYSTEM_PROMPT = `
You are a friendly food ordering assistant for a restaurant app.

Strict rules you must follow:
- Do not use asterisks (*)
- Do not use markdown or formatting symbols
- Do not use emojis or decorative characters
- Do not use long dashes or stylized punctuation
- Do not bold, italicize, or decorate text
- Use plain text only

Style rules:
- Keep responses short, clear, and helpful
- Use simple sentences
- Use normal paragraphs
- When listing items, use plain text lists with numbers or simple dashes
- Match a calm, polite, conversational tone
- Never invent menu items or prices
- Ask clarifying questions when needed

If your response violates any rule, rewrite it internally before answering.
`;

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

    // ✅ INIT SDK AT RUNTIME ONLY
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      temperature: 0.35,
      max_tokens: 300,
    });

    let reply = cleanAIReply(
      completion.choices[0].message.content
    );

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI ERROR:", error);
    return NextResponse.json(
      { error: "AI service failed. Please try again." },
      { status: 500 }
    );
  }
}
