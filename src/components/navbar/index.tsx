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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
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
        <Link
          href="/"
          className={`${styles.logoJEV} hidden lg:block btn-ghost text-2xl font-bold justify-end flex-row-reverse`}
        >
          Logo
        </Link>
        <div className="lg:hidden mt-2">
          <div className="">
            <div className="flex justify-between items-center ml-3 h-1/2 mb-10">
              <div>
                <div className={`${styles.menuHamburguesa}`}>
                  <input
                    type="checkbox"
                    id="btnmenu"
                    className={`${styles.btnmenu}`}
                    onClick={toggleMenu}
                  />
                  <label htmlFor="btnmenu" className={`${styles.lblmenu}`}>
                    <span className={`${styles.spn1}`}></span>
                    <span className={`${styles.spn2}`}></span>
                    <span className={`${styles.spn3}`}></span>
                  </label>
                </div>
              </div>
              <div className="absolute ml-10 flex justify-center ">
                <Link
                  href="/"
                  className={`${styles.logoJEV} btn-ghost text-2xl font-bold ml-10 relative`}
                >
                  Logo
                </Link>
              </div>
            </div>
            {isMenuOpen && (
              <ul
                className={`${styles.menuVertical} backdrop-opacity-10 backdrop-invert bg-white/10 min-h-full `}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl mt-10">
                      Equípate
                    </AccordionTrigger>
                    <AccordionContent>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem className="flex-col flex w-full h-full">
                            <Link href="/articulos" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Articulos</div>
                              </NavigationMenuLink>
                            </Link>
                            <Link href="/doctrina" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Doctrina</div>
                              </NavigationMenuLink>
                            </Link>
                            <Link href="/herramientas" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Herramientas</div>
                              </NavigationMenuLink>
                            </Link>
                            <Link href="/peliculas" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Peliculas</div>
                              </NavigationMenuLink>
                            </Link>
                            <Link href="/videoVisuales" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Videos</div>
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                      <Separator className="my-3" />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl mt-10">
                      Nosotros
                    </AccordionTrigger>
                    <AccordionContent>
                      <NavigationMenu>
                        <NavigationMenuList>
                          <NavigationMenuItem className="flex-col flex w-full h-full">
                            <Link href="/contactenos" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Contáctenos</div>
                              </NavigationMenuLink>
                            </Link>
                            <Link href="/quienesSomos" legacyBehavior passHref>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                              >
                                <div className="text-[18px]">Quiénes Somos</div>
                              </NavigationMenuLink>
                            </Link>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                      <Separator className="my-3" />
                    </AccordionContent>
                  </AccordionItem>
                  <NavigationMenu className="flex-col flex">
                    <NavigationMenuList className="mt-10">
                      <NavigationMenuItem>
                        <Link href="/devocionales" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            <span className="text-2xl ">Devocionales</span>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList className="mt-10">
                      <NavigationMenuItem>
                        <Link href="/discipulado" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={` ${navigationMenuTriggerStyle()}`}
                          >
                            <span className="text-2xl mr-4 ">Discipulado</span>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  {user.isSignedIn ? (
                    <div>
                      <UserButton afterSignOutUrl="/" />
                    </div>
                  ) : (
                    <Link href="/sign-in">
                      <Image
                        alt="Tailwind CSS Navbar component"
                        src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1711566804/imagenes/iniciar%20sesion%20log.svg"
                        width={40}
                        height={30}
                        className="border-2 rounded-full mt-20 ml-1 "
                      />
                    </Link>
                  )}
                </Accordion>
              </ul>
            )}
          </div>
        </div>
        {/** pantallas grandes*/}
        <div className=" lg:flex">
          <div className="hidden lg:flex">
            <ul className={`${styles.menuHorizontal}`}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className=" text-[18px] ">
                      Equípate
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className=" grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
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
                    <NavigationMenuTrigger className="text-[18px]  ">
                      Nosotros
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <ListItem href="/contactenos" title="Contáctenos">
                          cualquier consulta o duda puede contactarnos sin
                          ningún problema.
                        </ListItem>
                        <ListItem href="/quienesSomos" title="Quiénes somos">
                          aquí veras nuestro objetivo nuestras metas y
                          motivación
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
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/devocionales" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <div className="text-[18px]">Devocionales</div>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/discipulado" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={` ${navigationMenuTriggerStyle()}`}
                      >
                        <span className="text-[18px]">Discipulado</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {user.isSignedIn ? (
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <Link href="/sign-in">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1711566804/imagenes/iniciar%20sesion%20log.svg"
                    width={40}
                    height={30}
                    className="border-2 rounded-full mt-3 ml-4"
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
            " block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
