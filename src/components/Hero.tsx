"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import "@/styles/hero.scss";
import Image from "next/image";
import Modal from "./ui/modal";
import Form from "./ui/form";
import Input from "./ui/input";
import { toast } from "sonner";
import { isModuleNamespaceObject } from "util/types";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { formSchema, tFormSchema } from "@/lib/types";
// import { zodResolver } from "@hookform/resolvers/zod";

interface User {
  username: string;
  email: string;
  phone: string
}

const Hero = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { username, email, phone } = userData;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (data) {
        setUserData({
          username: "",
          email: "",
          phone: ""
        });
        setIsActive(false);
        return toast.success("Thanks for joining the waitlist");
      }
    } catch (error: any) {
      console.log("something went wrong", error.message);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero flex items-center max-w-7xl mx-auto max-sm:flex-col-reverse max-sm:gap-5 max-sm:py-8 max-sm:h-fit">
      <section className="flex flex-col gap-4 mb-10">
        <h1 className="text-2xl md:text-6xl font-extrabold xl:text-7xl 2xl:text-8xl max-sm:text-3xl">
          LEARN <br className="max-sm:hidden" /> SHARE <br />{" "}
          <span className="text-secondary">CONNECT</span>
        </h1>
        <p className="text-lg max-sm:text-base">
          Inspiring and Empowering the Next Gen Of tech{" "}
          <br className="max-sm:hidden" /> Preneurs through an advance digital
          platform
        </p>
        <button
          className="bg-secondary rounded text-primary w-fit px-8 py-2 border border-secondary font-semibold hover:border-secondary hover:text-white hover:bg-transparent duration-300 transition-all max-sm:w-full"
          onClick={(e) => setIsActive((prev) => !prev)}
        >
          Join Waitlist
        </button>
      </section>
      <section className="absolute top-1/2 md:transform md:-translate-y-1/2  md:translate-x-[9%] md:right-0  max-sm:relative z-10">
        <Image
          alt="theloop dashboard"
          src="/dashboard.svg"
          height={500}
          width={700}
          className="rounded-3xl md:h-[450px] max-sm:h-60 relative"
        />
      </section>
      <Modal isActive={isActive} setActive={setIsActive}>
        <Form
          onSubmit={handleSubmit}
          className="flex justify-evenly items-center flex-col z-[1001] "
        >
          <div className="flex flex-col justify-evenly items-center w-full h-3/4">
            <Input
              className="px-6 py-3 w-full rounded disabled:cursor-not-allowed"
              placeholder="Your name e.g Liz Pike"
              type="text"
              name="username"
              onChange={handleChange}
              value={username}
              aria-disabled={isLoading}
            />
            {/* {errors.username && <p className="text-rose-500">error</p>} */}
            <Input
              className="px-6 py-3 w-full rounded disabled:cursor-not-allowed"
              placeholder="Your email e.g lizpike@theloop.com"
              type="email"
              name="email"
              onChange={handleChange}
              aria-disabled={isLoading}
              value={email}
            />
            {/* {errors.username && <p className="text-rose-500">error</p>} */}

            <Input
              className="px-6 py-3 w-full rounded disabled:cursor-not-allowed"
              placeholder="Your phone e.g 657453278"
              type="email"
              name="email"
              onChange={handleChange}
              aria-disabled={isLoading}
              value={phone}
              />            
            <button
              type="submit"
              disabled={isLoading}
              className="bg-secondary disabled:cursor-not-allowed text-primary font-semibold hover:bg-primary transition-all duration-300 hover:text-secondary px-6 py-3 w-4/5 rounded"
            >
              Join Waitlist
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Hero;
