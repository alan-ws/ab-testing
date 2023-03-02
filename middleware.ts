import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

const whichBucket = (): number => Math.round(Math.random());
const buckets: { [key: number]: string } = {
  0: "bucket-a",
  1: "bucket-b",
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const url = await get(buckets[whichBucket()]);
  return NextResponse.rewrite(new URL(pathname, url));
}
