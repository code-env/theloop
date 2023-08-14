import React from "react";
import "@/styles/hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <section className="hero__left">
        <h1 className="left__text">
          LEARN SHARE <span>CONNECT</span>
        </h1>
        <button>Join Waitlist</button>
      </section>
      <section className="image"></section>
    </div>
  );
};

export default Hero;
