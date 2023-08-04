import { authMiddleware } from "@clerk/nextjs";

// In your authMiddleware configuration:
export default authMiddleware({
  publicRoutes: ["/api/:path*"],
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};