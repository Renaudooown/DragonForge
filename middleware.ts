import { NextRequest, NextResponse } from "next/server";
import { isValidSessionToken, sessionCookie } from "@/lib/session";

const PUBLIC_PATHS = [
  /^\/login\/?$/,
  /^\/_next\/static\//,
  /^\/_next\/image\/?/,
  /^\/_next\/webpack/,
  /^\/brand\//,
  /^\/people\//,
  /^\/venue\//,
  /^\/activities\//,
  /^\/sponsors\//,
  /^\/favicon\.ico$/,
  /^\/icon\.png$/,
  /^\/robots\.txt$/,
];

function isPublic(pathname: string): boolean {
  return PUBLIC_PATHS.some((pattern) => pattern.test(pathname));
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isPublic(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(sessionCookie.name)?.value;
  if (await isValidSessionToken(token)) {
    return NextResponse.next();
  }

  const login = request.nextUrl.clone();
  login.pathname = "/login";
  login.search = "";
  return NextResponse.redirect(login);
}

export const config = {
  matcher: ["/((?!_next/static|_next/webpack).*)"],
};
