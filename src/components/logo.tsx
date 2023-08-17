"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo flex justify-between items-center">
      <Image alt="theloop logo" src="/logo.svg" width={60} height={50} />
      {/* <h1 className="text-3xl relative bottom-2">🚀</h1> */}
    </Link>
  );
};

export default Logo;
