"use client";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import styles from "./index.module.css";
import React, { useState, useEffect } from "react";
import router from "next/router";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"] });
const Navbar = () => {
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
    setIsMenuOpen(false); 
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
    }
  }, [isMenuOpen]);

  const isRootRoute = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div className={`${montserrat.className} antialised items-start text-5xl`}>
      <div
        className={`${
          styles.navbar
        } font-semibold text-white fixed w-full inset-x-0 top-0 flex justify-between  z-50 ${
          isScrolled ? "bg-slate-600" : ""
        } ${isScrolled && "opacity-50"}`}
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
                            href="/contactenos"
                            className="text-[18px]  mb-3 text-black"
                          >
                            Contáctenos
                          </Link>
                        </li>
                        <li>
                          <Link
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
                            href="/articulos"
                            className="text-[18px]  mt-3 text-black"
                          >
                            Articulos
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/doctrina"
                            className="text-[18px]  my-3 text-black"
                          >
                            Doctrina
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/herramientas"
                            className="text-[18px]  text-black"
                          >
                            Herramientas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/peliculas"
                            className="text-[18px]  my-3 text-black"
                          >
                            Peliculas
                          </Link>
                        </li>
                        <li>
                          <Link
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
                  <Link href="/devocionales" className="text-[20px] text-black">
                    Devocionales
                  </Link>
                </li>
                <li className="text-black font-medium text-2xl ">
                  <Link
                    href="/discipulado"
                    className="text-[20px] text-black my-10"
                  >
                    Discipulado
                  </Link>
                </li>
                <button className="items-start text-black font-medium">
                  <li className="items-start">
                    <Link
                      href="/login"
                      className="text-[20px] mb-6 items-start"
                    >
                      login
                    </Link>
                  </li>
                </button>
              </ul>
            )}
          </div>
        </div>
        <div className=" lg:flex">
          <div className={`hidden lg:flex ${isMenuOpen ? "" : "hidden"}`}>
            <ul
              className={`${styles.menuHorizontal} ${styles.menu}  flex-nowrap`}
            >
              <li>
                <details>
                  <summary className="text-[20px]  ">Nosotros</summary>
                  <ul
                    className="px-2"
                    style={{ backgroundColor: "#fff", zIndex: 0 }}
                  >
                    <li>
                      <Link
                        href="/contactenos"
                        className="text-black text-[18px]"
                      >
                        Contáctenos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/quienesSomos"
                        className="text-black text-center  text-[18px]"
                      >
                        Quienes Somos
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="text-[20px] ">Características</summary>
                  <ul
                    className="p-2"
                    style={{
                      backgroundColor: "#fff",
                      zIndex: 0,
                      marginLeft: "10px",
                    }}
                  >
                    <li className="text-black text-center  text-[18px]">
                      <Link href="/articulos">Articulos</Link>
                    </li>
                    <li className="text-black text-center  text-[18px]">
                      <Link href="/doctrina">Doctrina</Link>
                    </li>
                    <li className="text-black text-center  text-[18px]">
                      <Link href="/herramientas">Herramientas</Link>
                    </li>
                    <li className="text-black text-center  text-[18px]">
                      <Link href="/peliculas">Peliculas</Link>
                    </li>
                    <li className="text-black text-center  text-[18px]">
                      <Link href="/videosVisuales">Videos</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/devocionales" className="text-[20px]">
                  Devocionales
                </Link>
              </li>
              <li>
                <Link href="/discipulado" className="text-[20px]">
                  Discipulado
                </Link>
              </li>

              <li className="text-[20px] ">
                <Link href="/login">login</Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
