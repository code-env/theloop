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
