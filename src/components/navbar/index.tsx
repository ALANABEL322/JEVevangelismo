"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={
        header
          ? "fixed w-[100%] text-[white] bg-[#020202]"
          : "bg-[transparent] "
      }
    >
      <nav className="w-full z-[100] fixed top-0 left-0 right-0">
        <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link className={`${styles.logo}`} href="/">
                <Image
                  src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709754260/imagenes/logo%20SVG.svg"
                  alt="logo"
                  width={80}
                  height={100}
                  className="object-cover"
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709916296/imagenes/boton%20X%20SVG.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/dn5ltihzv/image/upload/v1709916101/imagenes/boton%20hamburguesa%20svg.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={` flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              } ${styles.links}`}
            >
              <ul className=" h-screen md:h-auto items-center justify-center md:flex z-[1500]">
                <li className=" rounded-t-lg pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  bg-slate-950/50 to-transparent md:bg-transparent">
                  <Link
                    href="/about"
                    className={`${styles.enlaces}  brightness-200 mr-2`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    About
                  </Link>
                </li>
                <li className="rounded-t-lg my-2 pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  bg-slate-950/50 to-transparent md:bg-transparent">
                  <Link
                    href="/skills"
                    className={`${styles.enlaces} brightness-200 mr-2`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Skills
                  </Link>
                </li>
                <li className="rounded-t-lg pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  bg-slate-950/50 to-transparent md:bg-transparent">
                  <Link
                    href="/proyects"
                    className={`${styles.enlaces} brightness-200 mr-2`}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Projects
                  </Link>
                </li>
                <li className="rounded-t-lg pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  bg-slate-950/50 to-transparent md:bg-transparent">
                  <Link
                    href="/contact"
                    className={`${styles.enlaces} brightness-200 mr-2 `}
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
