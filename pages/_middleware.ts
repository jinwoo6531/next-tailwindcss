import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/auth/sign-in") && !req.cookies.token) {
      return NextResponse.redirect("/auth/sign-in")
    }
  }
}
