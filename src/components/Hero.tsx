"use client";

import React, { useState } from "react";
import "@/styles/hero.scss";
import Image from "next/image";
import Modal from "./ui/modal";
import Form from "./ui/form";
import Input from "./ui/input";
import Logo from "../components/logo";
import { useForm } from "react-hook-form";
import { formSchema, tFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<tFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: tFormSchema) => {};

  return (
    <div className="hero flex items-center max-w-7xl mx-auto max-sm:flex-col-reverse max-sm:gap-10 max-sm:py-10 max-sm:h-fit">
      <section className="flex flex-col gap-4 mb-10">
        <h1 className="text-2xl md:text-6xl font-extrabold xl:text-7xl 2xl:text-8xl max-sm:text-3xl">
          LEARN <br className="max-sm:hidden" /> SHARE <br />{" "}
          <span className="text-secondary">CONNECT</span>
        </h1>
        <p className="text-lg max-sm:text-base">
          Inspiring and Empowering the Next Gen Of tech <br /> Preneurs through
          an advance digital platform
        </p>
        <button
          className="bg-secondary rounded text-primary w-fit px-8 py-2 border border-secondary font-semibold hover:border-secondary hover:text-white hover:bg-transparent duration-300 transition-all"
          onClick={(e) => setIsActive((prev) => !prev)}
        >
          Join Waitlist
        </button>
      </section>
      <section className="absolute top-1/2 md:transform md:-translate-y-1/2  md:translate-x-[9%] md:right-0  max-sm:relative">
        <Image
          alt="theloop dashboard"
          src="/dashboard.svg"
          height={500}
          width={700}
          className="rounded-3xl md:h-[450px]"
        />
      </section>
      <Modal isActive={isActive} setActive={setIsActive}>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-evenly items-center flex-col z-[1001] "
        >
          <div className="flex flex-col justify-evenly items-center w-full bg-red-500 h-3/4">
            <Input
              className="px-6 py-3 w-full rounded"
              placeholder="Your name e.g Liz Pike"
              type="text"
              {...register("username")}
            />
            <Input
              className="px-6 py-3 w-full rounded"
              placeholder="Your email e.g lizpike@theloop.com"
              type="email"
              {...register("email")}
            />
            <button className="bg-secondary text-primary font-semibold hover:bg-primary transition-all duration-300 hover:text-secondary px-6 py-3 w-4/5 rounded">
              Join Waitlist
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Hero;
