import { Button, buttonVariants } from "@/components/ui/button";
import { Calendar } from "lucide-react";
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
    <section className="contentspace border-b pb-2">
      <h1 className="text-head-sm">{title}</h1>
      <p className="text-sm">{description}</p>
      <p>
        {date} {" | "} Posted by{" "}
        <span className="text-primary font-medium">{by}</span>
      </p>
      <Button className="w-fit gap-3 text-primary px-0" variant="link">
        <Calendar />
        <span className="font-medium">Add to calendar</span>
      </Button>
    </section>
  );
};

export default Event;
