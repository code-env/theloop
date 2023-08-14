"use client";

import React, { useState } from "react";
import "@/styles/hero.scss";
import Image from "next/image";
import dashboard from "../../public/dashboard.svg";
import Modal from "./ui/modal";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="hero">
      <section className="hero__left">
        <h1 className="left__text">
          LEARN <br /> SHARE <br /> <span>CONNECT</span>
        </h1>
        <p>
          Inspiring and Empowering the Next Gen Of tech <br /> Preneurs through
          an advance digital platform
        </p>
        <button onClick={(e) => setIsActive((prev) => !prev)}>
          Join Waitlist
        </button>
      </section>
      <section className="hero__image">
        <Image
          alt="theloop dashboard"
          src={dashboard}
          height={500}
          width={700}
        />
      </section>
      <Modal isActive={isActive} setActive={setIsActive}>
        <div>this is the zenith</div>
      </Modal>
    </div>
  );
};

export default Hero;
