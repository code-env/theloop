"use client";

import Form from "@/components/ui/form";
import Input from "@/components/ui/input";
import { goalTypeVariant } from "@/lib/types";
import { Goal } from "@prisma/client";
import { DropdownMenu } from "@radix-ui/themes";
import { ChevronDown } from "lucide-react";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

const CreateGoal = () => {
  const [goal, setGoal] = useState<Partial<Goal>>({
    title: "",
    description: "",
    endingDate: new Date(),
  });
  const [gtpe, setGtpe] = useState<goalTypeVariant>("Personal");

  const gt = ["Personal", "Community"];

  const { description, goalType, title, endingDate } = goal;

  const changeGtVariant = (goalType: string) => {
    setGtpe(goalType as goalTypeVariant);
  };

  useEffect(() => {
    setGoal((prev) => ({
      ...prev,
      goalType: gtpe,
    }));
  }, [goalType]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    let updatedValue = value;
    if (name === "endingDate") {
      const dateObj = new Date(value);
      updatedValue = dateObj.toISOString().slice(0, 10); // YYYY-MM-DD
    }

    setGoal((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(goal);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <p>Create a new Goal</p>
      <div className="contentspace">
        <Input
          name="title"
          value={title!}
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <Input
          name="description"
          value={description!}
          type="text"
          placeholder="Description"
          onChange={handleChange}
          textarea
        />
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <p className="bg-primary px-8 py-2 text-slate-100 rounded font-medium flex items-center justify-between w-fit">
              {gtpe} <ChevronDown />
            </p>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {gt.map((gtype) => (
              <DropdownMenu.Item
                key={gtype}
                onClick={() => changeGtVariant(gtype)}
                className="cursor-pointer"
              >
                {gtype}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Input
          name="endingDate"
          value={endingDate ? endingDate.toString() : ""}
          type="date"
          placeholder="Date"
          onChange={handleChange}
          // textarea
        />
      </div>

      <button className="bg-primary px-8 py-2 text-slate-100 rounded font-medium">
        Create Goal
      </button>
    </Form>
  );
};

export default CreateGoal;
