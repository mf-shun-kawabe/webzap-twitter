import { NextResponse } from "next/server";

export async function GET() {
  // コンテナ名でNestに中継
  const res = await fetch("http://webzap-twitter-nest-1:3000/health", {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
