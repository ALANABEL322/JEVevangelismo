"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./index.module.css";
import React, { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const Navbar = () => {
  const user = useUser();
  console.log(user);
  const userId = user.user?.id;
  console.log(userId);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  //version desktop menu

  const toggleMenuDesktop = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuDesktop = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${montserrat.className} antialised items-start text-5xl`}>
      <div
        className={`${
          styles.navbar
        } font-semibold text-white w-full inset-x-0 top-0 flex justify-between  z-50
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
              <Image
                src={
                  "https://res.cloudinary.com/dn5ltihzv/image/upload/v1711653470/imagenes/Logo%20JEV.png"
                }
                width={80}
                height={50}
                alt="image-logo"
              />
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
                      Equípate
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
        {/**version desktop */}
        <div className=" lg:flex">
          <div className="hidden lg:flex">
            <ul
              className={`${styles.menuHorizontal} ${styles.menu}  flex-nowrap`}
            >
              <div className=" dropdown dropdown-hover border text-white hover:text-[#b3794f] ">
                <li
                  tabIndex={0}
                  role="button"
                  className=" mr-10 mt-[8px] text-[20px] font-bold"
                >
                  Nosotros
                </li>
                <ul
                  tabIndex={0}
                  className=" dropdown-content z-[1] menu p-2 shadow bg-base-100  w-64 mt-7 flex justify-center"
                  style={{
                    backgroundColor: "#fff",
                    zIndex: 0,
                  }}
                >
                  <li className="">
                    <Link
                      onClick={closeMenu}
                      href="/contactenos"
                      className=" text-[18px] text-black my-4"
                    >
                      Contáctenos
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={closeMenu}
                      href="/quienesSomos"
                      className=" text-[18px] mb-4 text-black"
                    >
                      Quienes Somos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown dropdown-hover">
                <li
                  tabIndex={0}
                  role="button"
                  className="text-[20px] mt-[8px] mr-6 text-white hover:text-[#b3794f]"
                >
                  Equípate
                </li>
                <ul
                  tabIndex={0}
                  className={`${styles.menu} flex menu mt-7 dropdown-content z-[1]  shadow bg-slate-300 w-64`}
                  style={{
                    backgroundColor: "#fff",
                    zIndex: 0,
                  }}
                >
                  <li className="text-black text-center  text-[18px] p-3">
                    <Link href="/articulos">Articulos</Link>
                  </li>
                  <li className="text-black text-center  text-[18px] p-3">
                    <Link href="/doctrina">Doctrina</Link>
                  </li>
                  <li className="text-black text-center  text-[18px] p-3">
                    <Link href="/herramientas">Herramientas</Link>
                  </li>
                  <li className="text-black text-center  text-[18px] p-3">
                    <Link href="/peliculas">Peliculas</Link>
                  </li>
                  <li className="text-black text-center  text-[18px] p-3">
                    <Link href="/videosVisuales">Videos</Link>
                  </li>
                </ul>
              </div>
              <li>
                <Link href="/devocionales" className="text-[20px] mr-2">
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
                    className="border-2 rounded-full"
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
