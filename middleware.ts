import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const userAgent = req.headers.get("user-agent") || "";
	const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

	if (!isMobile) {
		return NextResponse.redirect(new URL("/not-supported", req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: "/:path*",
};
