// import { UserButton, auth } from "@clerk/nextjs";
// import Link from "next/link";
import React from "react";
// import Navbar from "../navbar";

export default async function Header() {
  // const { userId } = auth();
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      {/* <Navbar /> */}
      {/* <div>
        {userId ? (
          <div className="flex gap-4 items-center">
            <Link href="/dashboard">tu cuenta</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link href="/sign-up">crear cuenta</Link>
            <Link href="/sign-in">registrarse</Link>
          </div>
        )}
      </div> */}
    </div>
  );
}
