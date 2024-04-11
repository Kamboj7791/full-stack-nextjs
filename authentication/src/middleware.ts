import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    // Extract path from request URL
    const path = request.nextUrl.pathname;

    // Define public paths where authentication is not required
    const publicPaths = ["/login", "/signup"];

    // Check if the current path is a public path
    const isPublicPath =
      path === "/login" || path === "/signup" || path === "/verifyemail";

    // Get token from cookies
    const token = request.cookies.get("token")?.value || "";
    // console.log(token, isPublicPath, path);
    // Redirect logic based on authentication status and path
    if (isPublicPath && token) {
      // Redirect to home if user is authenticated and trying to access public paths
      return NextResponse.redirect(new URL("/", request.nextUrl));
    } else if (!isPublicPath && !token) {
      // Redirect to login if user is not authenticated and trying to access private paths
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    } else {
      // Continue request processing if authentication requirements are met
      return NextResponse.next();
    }
  } catch (error) {
    // Handle errors gracefully
    console.error("Error in authentication middleware:", error);
    return NextResponse.error();
  }
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile/:path*", "/login", "/signup", "/verifyemail"],
};
