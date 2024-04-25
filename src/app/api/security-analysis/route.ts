import { type NextRequest, NextResponse } from "next/server";

// TODO: Security Analysis: Are there security vulnerabilities in this code?
export async function POST(request: NextRequest) {
  const formData = await request?.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  return Response.json({ name, email });
}
