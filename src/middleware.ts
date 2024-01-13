import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes:["/", "/about", "/contact", "/posts", "/posts/:id"]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
