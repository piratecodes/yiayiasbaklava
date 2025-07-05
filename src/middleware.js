import { NextResponse } from 'next/server';

// Define your routes here
const authRoutes = ['/login', '/signup', '/login/forgot-password'];
const protectedRoutes = ['/profile', '/order/giftcard', '/order/delivery', '/order/pickup', '/favourite', '/vote'];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const jwtToken = request.cookies.get('jwt_token')?.value;
  const refreshToken = request.cookies.get('refresh_token')?.value;
  
  // Check if user is authenticated
  const isAuthenticated = jwtToken && refreshToken;

  // Debug info (remove after testing)
  // console.log('🔥 Middleware running for:', pathname);
  // console.log('🍪 Cookies found:', request.cookies.getAll().map(c => c.name));
  // console.log('🔑 JWT Token exists:', !!jwtToken);
  // console.log('🔄 Refresh Token exists:', !!refreshToken);
  // console.log('✅ Is Authenticated:', isAuthenticated);
  
  // Check if current path is an auth route
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));
  
  // Check if current path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL('/profile', request.url));
  }
  
  // Redirect unauthenticated users from protected pages to login
  if (!isAuthenticated && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};