import { NextFetchEvent, NextRequest } from "next/server"

export function middleware(re: NextRequest, ev: NextFetchEvent) {
  console.log("zz")
}
