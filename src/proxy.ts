// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   const isPublic =
//     pathname === "/login" || pathname === "/signup";

//   const session = request.cookies.get("session");

//   if (!session && !isPublic) {
//       console.log('no session')
//     return NextResponse.redirect(
//       new URL("/login", request.url)
//     );
//   }

//   if (session && isPublic) {
//     return NextResponse.redirect(
//       new URL("/dashboard", request.url)
//     );
//   }

//   return NextResponse.next();
// }

// export const config = {
//    matcher: [
//     "/dashboard/:path*",
//     "/login",
//     "/signup",
//   ]
// };

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: '/about/:path*',
}