"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  if (pathname.includes("/dashboard")) {
    return (
      <Link
        href="/dashboard"
        className="logo flex justify-between items-center"
      >
        <Image
          src="/dlogo.png"
          alt="theloop dashboard"
          height={20}
          width={110}
        />
      </Link>
    );
  }
  return (
    <Link href="/" className="logo flex justify-between items-center">
      <Image alt="theloop logo" src="/logo.svg" width={60} height={50} />
    </Link>
  );
};

export default Logo;
