import { authMiddleware } from "@clerk/nextjs";

// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/devocionales",
    "/articulos",
    "/doctrina",
    "/herramientas",
    "/peliculas",
    "/videosVisuales",
    "/contactenos",
    "/quienesSomos",
    "/dashboard",
    "/discipulado",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
