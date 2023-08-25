"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/Calender";
import Event from "./event";

const Infos = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="flex-[0.3] bg-white p-4  shadow-md flex flex-col gap-3 h-fit">
      <h1 className="text-head border-b">Event</h1>
      <div className="flex flex-col gap-2">
        <Event
          id="4657890-9988765"
          by="Admin"
          date="23.78.80"
          title="Accountability Session"
          description="Get Insights on how to improve your startup in the long run"
        />
        <Event
          id="4657890-9988765"
          by="Admin"
          date="23.78.80"
          title="Accountability Session"
          description="Get Insights on how to improve your startup in the long run"
        />
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        />
      </div>
    </section>
  );
};

export default Infos;
