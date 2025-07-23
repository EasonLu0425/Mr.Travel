import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/dashboard", "/settings"]
const homeRoute = "/"
const loginRoute = "/login"

export default async function middleware(request: NextRequest) {
  const session = await auth()
  const { pathname } = request.nextUrl

  console.log("=== Middleware Debug ===")
  console.log("Pathname:", pathname)
  console.log("Session exists:", !!session)
  console.log("Session user:", session?.user?.email)

  // 如果已登入用戶訪問 login 頁面，重定向到首頁
  if (pathname === loginRoute && session) {
    console.log("✅ User already logged in, redirecting to home")
    const homeUrl = new URL(homeRoute, request.url)
    return NextResponse.redirect(homeUrl)
  }

  const isHomeRoute = pathname === homeRoute
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  const needsAuth = isHomeRoute || isProtectedRoute

  // 如果需要認證但未登入，重定向到 login 頁面
  if (needsAuth && !session) {
    console.log("🚫 No session found, redirecting to login")
    const loginUrl = new URL(loginRoute, request.url)
    return NextResponse.redirect(loginUrl)
  }

  console.log("✅ Access granted")
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)  
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}