import { NextResponse } from "next/server";

export async function middleware(request) {
  try {
    console.log(request,"request")
    const path = request.nextUrl.pathname;
    const isAuthenticated = false;

    if (isAuthenticated && path === "/login") {
      return NextResponse.redirect(new URL('/private_page', request.url));
    }
    if (!isAuthenticated && path === "/private_page") {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next()
  } catch (error) {
    console.error('Error occurred while checking authentication:', error);
    // Handle the error, maybe return a response with 500 status code
    return NextResponse.error();
  }
}

export const config = {
  matcher: ['/login', '/private_page']
}