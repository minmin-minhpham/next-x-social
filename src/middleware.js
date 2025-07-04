import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

// export function middleware(req) {
//   const token = req.cookies.get("token"); //👈 giả sử cookie 'token' xác định login
//   const url = req.nextUrl;

//   const isAuthRoute = url.pathname === "/" || url.pathname.startsWith("/signin") || url.pathname.startsWith("/signup");

//   if (!token && !isAuthRoute) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (token && isAuthRoute) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   return NextResponse.next();
// }

export function middleware(req) {
  const url = req.nextUrl;

  if (url.pathname === "/home") return NextResponse.redirect(new URL("/", req.url));

  // const url = req.nextUrl;
  // const token = req.cookies.get("token");

  // if (url.pathname === "/" && token) {
  //   url.pathname = "/app"; // 👈 trỏ về (app)/page.tsx
  //   return NextResponse.rewrite(url);
  // }

  // if (url.pathname === "/" && !token) {
  //   url.pathname = "/auth"; // 👈 trỏ về (auth)/page.tsx
  //   return NextResponse.rewrite(url);
  // }
}
