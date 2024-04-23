import { type NextRequest, NextResponse } from "next/server";

// TODO: Are there security vulnerabilities in this code?
// Prompt: #file Comment the parts in the code that has security vulnerabilities
export async function POST(request: NextRequest) {
  const userInput = request?.text;
  console.log("Received user input:", userInput);
  return Response.json({ yourInput: userInput });
}
