import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/signup", "/"];
const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("session")?.value;
  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route)
  );
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isPublicRoute && token && (path === "/login" || path === "/signup")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
