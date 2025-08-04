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
  // const isToken = false;
  // const path = req.nextUrl.pathname;

  // // ROOT PATH (Trang chính)
  // if (path === "/") {
  //   if (!isToken) return NextResponse.rewrite(new URL("/welcome", req.url));

  //   return NextResponse.rewrite(new URL("/home", req.url));
  // }

  // // HANDLE  ROUTE PROTECTED_ROUTES
  // const protectedRoutes = ["/home", "/dashboard", "/profile"];
  // const isProtectedRoute = protectedRoutes.includes(path);

  // if (isProtectedRoute) {
  //   if (isToken) return NextResponse.next();

  //   const loginUrl = new URL('/login', req.url);
  //   loginUrl.searchParams.set('redirect_after_login', path);
  //   return NextResponse.redirect(loginUrl);
  // }
}
