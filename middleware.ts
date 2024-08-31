import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const userAgent = req.headers.get("user-agent") || "";
	const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
	const { pathname } = req.nextUrl;

	// Redirect mobile devices to login page if accessing the root path "/"
	if (isMobile && pathname === "/") {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	// Redirect non-mobile devices to "not-supported" page for all routes except "/not-supported"
	if (!isMobile && pathname !== "/not-supported") {
		return NextResponse.redirect(new URL("/not-supported", req.url));
	}

	// Allow the request to proceed for all other cases
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!not-supported).*)"], // Apply middleware to all routes except "not-supported"
};
