"use client";

import React, { useEffect, useState } from "react";
import Keyperformance from "./keyperformance";
import Dtext from "../dtext";
import axios from "axios";
import { toast } from "sonner";

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
    <div className="shadow-primary bg-white rounded-10 p-4 h-[307px]">
      Progress
    </div>
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
          {quote?.q}- <span className="italic text-sm">{quote?.a}</span>
        </blockquote>
      </div>
    </div>
  );
}

export default Dprogress;
