import React, { FC } from "react";

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  by: string;
}

const Event: FC<EventProps> = ({ title, description, date, by }) => {
  return (
    <section className="flex flex-col gap-2 border-b pb-2">
      <h1 className="text-head-sm">{title}</h1>
      <p className="text-sm">{description}</p>
      <p>
        {date} {" | "} Posted by{" "}
        <span className="text-primary font-normal">{by}</span>
      </p>
    </section>
  );
};

export default Event;
