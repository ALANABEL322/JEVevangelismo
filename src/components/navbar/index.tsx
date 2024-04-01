"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Navbar = () => {
  const user = useUser();
  console.log(user);
  const userId = user.user?.id;
  console.log(userId);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isRootRoute = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Articulos",
      href: "/articulos",
      description:
        "interes cristiano contenido relacionado a devocionales, doctrina y musica.",
    },
    {
      title: "Doctrina",
      href: "/doctrina",
      description:
        "enseñanzas doctrinales fundamentales para el caminar cristiano.",
    },
    {
      title: "Herramientas",
      href: "/herramientas",
      description:
        "contenido variado para tener opciones y recomendaciones en cuanto a la fé.",
    },
    {
      title: "Peliculas",
      href: "/peliculas",
      description: "toda clase de peliculas cristianas.",
    },
    {
      title: "Videos",
      href: "/videosVisuales",
      description: "Videos evangelisticos en la práctica y teoría.",
    },
  ];

  return (
    <div className={`${montserrat.className} antialised items-start text-5xl`}>
      <div
        className={`${
          styles.navbar
        } font-semibold text-white fixed w-full inset-x-0 top-0 flex justify-between  z-50
        ${isScrolled ? "bg-slate-600" : ""} ${isScrolled && "opacity-50"}`}
        style={{ backgroundColor: isRootRoute ? "" : "" }}
      >
        <div className="navbar-start flex ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <Link href="/" className="btn btn-ghost text-2xl font-bold">
              Logo
            </Link>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className={`${styles.menu} w-screen menu menu-sm dropdown-content mt-3 z-[1] p-2 `}
                style={{ backgroundColor: "#fff", zIndex: 0 }}
              >
                <div className="collapse collapse-arrow border text-black hover:text-[#b3794f] ">
                  <div className="collapse collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium ">
                      Nosotros
                    </div>
                    <div className="collapse-content">
                      <ul className="p-2">
                        <li className="">
                          <Link
                            onClick={closeMenu}
                            href="/contactenos"
                            className="text-[18px]  mb-3 text-black"
                          >
                            Contáctenos
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/quienesSomos"
                            className="text-[18px]  text-black"
                          >
                            Quienes Somos
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="collapse-content"></div>
                </div>

                <div className="collapse collapse-arrow border border-base-300 mt-3  text-black hover:text-[#b3794f]">
                  <div className="collapse collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium ">
                      Equípanos
                    </div>

                    <div className="collapse-content">
                      <ul className="p-2">
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/articulos"
                            className="text-[18px]  mt-3 text-black"
                          >
                            Articulos
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/doctrina"
                            className="text-[18px]  my-3 text-black"
                          >
                            Doctrina
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/herramientas"
                            className="text-[18px]  text-black"
                          >
                            Herramientas
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/peliculas"
                            className="text-[18px]  my-3 text-black"
                          >
                            Peliculas
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={closeMenu}
                            href="/videosVisuales"
                            className="text-black text-[18px] "
                          >
                            Videos
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <li className="text-black font-medium mt-8">
                  <Link
                    href="/devocionales"
                    className="text-[20px] text-black"
                    onClick={closeMenu}
                  >
                    Devocionales
                  </Link>
                </li>
                <li className="text-black font-medium text-2xl ">
                  <Link
                    href="/discipulado"
                    className="text-[20px] text-black my-10"
                    onClick={closeMenu}
                  >
                    Discipulado
                  </Link>
                </li>
                {user.isSignedIn ? (
                  <div className="mb-3">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                ) : (
                  <Link href="/iniciar-sesion" onClick={closeMenu}>
                    <Image
                      alt="Tailwind CSS Navbar component"
                      src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1711566804/imagenes/iniciar%20sesion%20log.svg"
                      width={40}
                      height={30}
                      className="border-2 rounded-full mb-5 ml-3"
                    />
                  </Link>
                )}
              </ul>
            )}
          </div>
        </div>
        <div className=" lg:flex">
          <div className="hidden lg:flex">
            <ul className={`${styles.menuHorizontal} flex-nowrap`}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="mb-3 text-black text-[20px] ">
                      Equípate
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            className="text-[20px]"
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-black text-[20px] mx-4 mb-3">
                      Nosotros
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <ListItem href="/contactenos" title="Contáctenos">
                         cualquier consulta o duda puede contactarnos sin ningún problema.
                        </ListItem>
                        <ListItem
                          href="/quienesSomos"
                          title="Quiénes somos"
                        >
                          aquí veras nuestro objetivo nuestras metas y motivación 
                        </ListItem>
                        {/* <ListItem
                          href="/docs/primitives/typography"
                          title="Typography"
                        >
                          Styles for headings, paragraphs, lists...etc
                        </ListItem> */}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <li>
                <Link href="/devocionales" className="text-[20px] mr-5">
                  Devocionales
                </Link>
              </li>
              <li>
                <Link href="/discipulado" className="text-[20px] mr-5">
                  Discipulado
                </Link>
              </li>
              {user.isSignedIn ? (
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <Link href="/iniciar-sesion">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1711566804/imagenes/iniciar%20sesion%20log.svg"
                    width={40}
                    height={30}
                    className="border-2 rounded-full mt-3"
                  />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
