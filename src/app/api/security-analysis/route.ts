import { type NextRequest, NextResponse } from "next/server";

// TODO: Are there security vulnerabilities in this code?
// Prompt: #file Comment the parts in the code that has security vulnerabilities and explain why
export async function POST(request: NextRequest) {
  const formData = await request?.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}
