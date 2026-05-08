import { NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";

const protectedRoutes = ["/", "/profile", "/friends"];
const publicRoutes = ["/register", "/login"];

export const proxy = auth((req) => {
  const pathname = req.nextUrl.pathname; // เช็คว่า path อะไร
  const isAuthenticated = !!req.auth; // What is Token ? ถ้าไม่มีให้ไปหน้า login

  const isProtectedRoute = protectedRoutes.some((el) =>
    el === '/' ? pathname === el: pathname.startsWith(el)
  );

  // เช็คแล้วถ้าไม่ token ให้ไปหน้าไหนที่เราต้องการ
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url)) // URL Create new url 
  }

  const isPublicRoute = publicRoutes.some((el) => 
    el === '/' ? pathname === el: pathname.startsWith(el)
  )
  // ถ้ามีแล้วไปไหนได้บ้าง
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
