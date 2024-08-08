import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const data = await fetch("https://dog-api.kinduff.com/api/facts", {
    cache: "no-cache",
  });
  const fact = await data.json();

  if (!data.ok) {
    return Response.json({ error: fact.message });
  }
  return Response.json({ fact: fact.facts[0], status: 200 });
}
