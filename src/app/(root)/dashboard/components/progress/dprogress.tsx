"use client";

import React, { useEffect, useState } from "react";
import Keyperformance from "./keyperformance";
import Dtext from "../dtext";
import axios from "axios";
import { toast } from "sonner";
import { Progress as ProgressBar } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Dprogress = () => {
  return (
    <section className=" flex flex-col gap-3">
      <Dtext label="Your Progress" />
      <section className="flex gap-[30px]">
        <section className="flex-1 flex-col gap-3 flex">
          <Progress />
          <DailyQuote />
        </section>
        <section className="flex-1 shadow-primary bg-white rounded-10 p-4 h-[443px]">
          <Keyperformance />
        </section>
      </section>
    </section>
  );
};

function Progress() {
  return (
    <section className="shadow-primary bg-white rounded-10 p-4 h-[307px] contentspace">
      <p className="text-[15px] font-medium">Daily progress</p>
      <section className="flex flex-col gap-3 flex-1">
        <ProgressElement
          value={30}
          link="/dashboard/goals"
          linkPlaceholder="View goals"
          title="Goals completed"
          doneFar={17}
          totalLength={30}
        />
        <ProgressElement
          value={30}
          link="/dashboard/goals"
          linkPlaceholder="View goals"
          title="Goals completed"
          doneFar={10}
          totalLength={300}
        />
        <ProgressElement
          value={30}
          link="/dashboard/goals"
          linkPlaceholder="View goals"
          title="Goals completed"
          doneFar={10}
          totalLength={30}
        />
      </section>
      <section className="flex justify-end">
        <Button variant="default" className="w-fit">
          Go to goals
        </Button>
      </section>
    </section>
  );
}

interface progressElementProps {
  title: string;
  value: number;
  link: string;
  linkPlaceholder: string;
  totalLength: number;
  doneFar: number;
}

function ProgressElement({
  link,
  title,
  value,
  linkPlaceholder,
  doneFar,
  totalLength,
}: progressElementProps) {
  const percentage = Math.floor((doneFar / totalLength) * 100);

  return (
    <section className="flex flex-col gap-2 text-xs font-normal">
      <p className="flex items-center justify-between">
        <span>{title}</span>
        <Link href={link} className="text-primary hover:underline">
          {linkPlaceholder}
        </Link>
      </p>
      <ProgressBar value={percentage} />
      <p>
        {doneFar}/{totalLength}
      </p>
    </section>
  );
}

interface Quote {
  q: string;
  a: string;
  h: string;
}

function DailyQuote() {
  const [quote, setQuote] = useState<Quote>();
  useEffect(() => {
    async function getQuote() {
      try {
        const { data } = await axios.get("/api/quote");

        setQuote(data[0]);
      } catch (error) {
        toast.error("Failded to fetch your daily quote");
      }
    }

    getQuote();
  }, []);
  return (
    <div className="contentspace">
      <Dtext label="Daily Quote" />
      <div className="border-t border-l border-primary py-2 px-12">
        <blockquote className="flex flex-col">
          {quote?.q} - <span className="italic text-sm">{quote?.a}</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Dprogress;
