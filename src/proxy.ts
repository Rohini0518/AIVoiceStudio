import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  console.log("✅ Proxy is running:", req.nextUrl.pathname);
});
export const config = {
  matcher: ["/:path*"],
};