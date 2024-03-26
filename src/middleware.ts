import { authMiddleware } from "@clerk/nextjs";

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
    "/api/webhooks/clerk",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
