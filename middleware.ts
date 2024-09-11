import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const userAgent = req.headers.get("user-agent") || "";
	const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
	const { pathname } = req.nextUrl;

	// Redirect mobile devices accessing the not-supported path to the login page
	if (isMobile && pathname === "/not-supported") {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// Redirect non-mobile devices to "not-supported" page
	if (!isMobile && pathname !== "/not-supported") {
		return NextResponse.redirect(new URL("/not-supported", req.url));
	}

	// Allow the request to proceed for all other cases
	return NextResponse.next();
}

export const config = {
	// Handle all routes except for the API routes (e.g., /api/*) and static files
	matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
