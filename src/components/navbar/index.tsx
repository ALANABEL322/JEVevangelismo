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
        } font-semibold text-white fixed w-full inset-x-0 top-0  justify-between  z-50
        ${isScrolled ? "bg-slate-600" : ""} ${isScrolled && "opacity-50"}`}
        style={{ backgroundColor: isRootRoute ? "" : "" }}
      >
        <Link
          href="/"
          className={`${styles.logoJEV} hidden lg:block btn-ghost text-2xl font-bold justify-end flex-row-reverse`}
        >
          <Image
            src={
              "https://res.cloudinary.com/dn5ltihzv/image/upload/v1711653470/imagenes/Logo%20JEV.png"
            }
            width={90}
            height={100}
            alt="logo"
          />
        </Link>
        <div className="lg:hidden mt-2">
          <div className="">
            <div className="flex justify-between items-center ml-3 h-1/2 mb-20">
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
                  <Image
                    src={
                      "https://res.cloudinary.com/dn5ltihzv/image/upload/v1711653470/imagenes/Logo%20JEV.png"
                    }
                    width={80}
                    height={100}
                    alt="logo"
                    className="object-cover mt-2"
                  />
                </Link>
              </div>
            </div>
            {isMenuOpen && (
              <div>
                <motion.nav
                  className={`${styles.menuVertical}`}
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? "0%" : "-100%",
                  }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, x: "-100%" }}
                />
                <NavigationMenu className="flex-col">
                  <NavigationMenu className="flex z-50">
                    <NavigationMenuList className="mt-10">
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-[22px]">
                          <motion.div
                            initial={{ opacity: 0, x: "-20px" }}
                            animate={{
                              opacity: isMenuOpen ? 1 : 0,
                              x: isMenuOpen ? 0 : "-20px",
                            }}
                            transition={{ delay: 0.6 }}
                            exit={{ opacity: 0, x: "-20px" }}
                          >
                            Equípate
                          </motion.div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] z-40">
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
                  <NavigationMenu className="flex z-40">
                    <NavigationMenuList className="mt-10">
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-[22px]">
                          <motion.div
                            initial={{ opacity: 0, x: "-20px" }}
                            animate={{
                              opacity: isMenuOpen ? 1 : 0,
                              x: isMenuOpen ? 0 : "-20px",
                            }}
                            transition={{ delay: 0.7 }}
                            exit={{ opacity: 0, x: "-20px" }} // Animación de salida
                          >
                            Nosotros
                          </motion.div>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 w-64 lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <ListItem href="/contactenos" title="Contáctenos">
                              Cualquier consulta o duda puede contactarnos sin
                              ningún problema.
                            </ListItem>

                            <ListItem
                              href="/quienesSomos"
                              title="Quiénes somos"
                            >
                              Aquí verás nuestro objetivo, nuestras metas y
                              motivación.
                            </ListItem>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <NavigationMenuList className="mt-10">
                    <NavigationMenuItem>
                      <Link href="/devocionales" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: "-20px" }}
                            animate={{
                              opacity: isMenuOpen ? 1 : 0,
                              x: isMenuOpen ? 0 : "-20px",
                            }}
                            transition={{ delay: 0.8 }}
                            exit={{ opacity: 0, x: "-20px" }}
                          >
                            <span className="text-[20px] ">Devocionales</span>
                            <Separator className="w-screen absolute mt-6" />
                          </motion.div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>

                  <NavigationMenuList className="my-10 ">
                    <NavigationMenuItem>
                      <Link href="/discipulado" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          <motion.div
                            initial={{ opacity: 0, x: "-20px" }}
                            animate={{
                              opacity: isMenuOpen ? 1 : 0,
                              x: isMenuOpen ? 0 : "-20px",
                            }}
                            transition={{ delay: 0.9 }}
                            exit={{ opacity: 0, x: "-20px" }}
                          >
                            <span className="text-[20px] mr-4 ">
                              Discipulado
                            </span>
                            <Separator className="w-screen absolute mt-6" />
                          </motion.div>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <div className="absolute ml-4 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                  {user.isSignedIn ? (
                    <motion.div
                      initial={{ opacity: 0, x: "-20px" }}
                      animate={{
                        opacity: isMenuOpen ? 1 : 0,
                        x: isMenuOpen ? 0 : "-20px",
                      }}
                      transition={{ delay: 1.0 }}
                      exit={{ opacity: 0, x: "-20px" }}
                    >
                      <UserButton afterSignOutUrl="/" />
                    </motion.div>
                  ) : (
                    <Link href="/sign-in">
                      <motion.div
                        initial={{ opacity: 0, x: "-20px" }}
                        animate={{
                          opacity: isMenuOpen ? 1 : 0,
                          x: isMenuOpen ? 0 : "-20px",
                        }}
                        transition={{ delay: 1.0 }}
                        exit={{ opacity: 0, x: "-20px" }}
                      >
                        <Image
                          alt="Tailwind CSS Navbar component"
                          src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1711566804/imagenes/iniciar%20sesion%20log.svg"
                          width={40}
                          height={30}
                          className="border-2 rounded-full mt-5 flex justify-start"
                        />
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>
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
              <div className="rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg">
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
              </div>
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
