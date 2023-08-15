"use client";

import React, { useState } from "react";
import "@/styles/hero.scss";
import Image from "next/image";
import dashboard from "../../public/dashboard.svg";
import Modal from "./ui/modal";
import Form from "./ui/form";
import Input from "./ui/input";
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
    <div className="hero flex items-center">
      <section className="flex flex-col gap-4 mb-10">
        <h1 className="text-2xl md:text-6xl font-extrabold xl:text-7xl ">
          LEARN <br /> SHARE <br /> <span className="text-aqua">CONNECT</span>
        </h1>
        <p>
          Inspiring and Empowering the Next Gen Of tech <br /> Preneurs through
          an advance digital platform
        </p>
        <button
          className="bg-aqua rounded text-secondary w-fit px-8 py-2 border border-aqua hover:border-aqua hover:text-white hover:bg-transparent duration-300 transition-all"
          onClick={(e) => setIsActive((prev) => !prev)}
        >
          Join Waitlist
        </button>
      </section>
      <section className="absolute top-1/2 transform -translate-y-1/2 translate-x-[30%] right-0 ">
        <Image
          alt="theloop dashboard"
          src={dashboard}
          height={500}
          width={700}
          className="rounded md:h-[400px]"
        />
      </section>
      <Modal isActive={isActive} setActive={setIsActive}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Username" type="text" {...register("username")} />
          <Input placeholder="Email" type="email" {...register("email")} />
          <button className="bg-red-500">Join Waitlist</button>
        </Form>
      </Modal>
    </div>
  );
};

export default Hero;
