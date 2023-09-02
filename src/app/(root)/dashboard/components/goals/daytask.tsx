"use client";

import { PlusCircle, X } from "lucide-react";
import React, { FC, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/inputNew";
import { currentTime } from "@/lib/getTime";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/formNew";
import { Goal, goalSchema, typeGoalSchema, userGoals } from "@/lib/types";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { convertDateString } from "@/lib/dateConverter";
interface DailyTask {
  day: string;
  date: string;
  isActive: boolean;
  onClick: () => void;
  updated: (goal: Goal) => void
}

const DayTask: FC<DailyTask> = ({ day, date, onClick, isActive, updated }) => {
  const form = useForm<typeGoalSchema>({
    resolver: zodResolver(goalSchema),
    defaultValues: {
      title: "",
      name: "",
    },
  });
  async function onSubmit(values: typeGoalSchema) {
    try {
      const { name, title } = values;

      const goal = {
        name,
        title,
        time,
        date: convertDateString(`${day}${date}`),
      };

      const { data } = await axios.post("/api/goals", goal);

      updated(data.goal);



      form.reset();
    } catch (error) {
      toast.error("Something went Wrong!!");
    }
  }

  const time: string = currentTime();

  const isLoading = form.formState.isSubmitting;

  return (
    <section
      className={cn(
        "flex-1 shadow-primary rounded-10 cursor-pointer p-2 bg-white h-[105px] slowmo overflow-hidden contentspace relative z-10",
        isActive && "h-[235px] cursor-default"
      )}
      onClick={onClick}
    >
      <h1
        className={cn(
          "flex flex-col gap-1 slowmo border-b-0",
          isActive && "border-b"
        )}
      >
        <span className="text-3xl font-semibold v-center justify-between">
          {day}
          <span
            className={cn(
              "opacity-0 slowmo  pointer-events-none",
              isActive && "opacity-100 cursor-pointer pointer-events-auto"
            )}
          >
            <X onClick={(e) => e.stopPropagation()} />
          </span>
        </span>
        <span className="text-xs justify-between flex">
          {date}
          <span className={cn("opacity-0 slowmo", isActive && "opacity-100")}>
            {time}
          </span>
        </span>
      </h1>
      <section
        className={cn(
          "v-center text-[#606060] justify-between opacity-100 slowmo relative",
          isActive && "opacity-0 pointer-events-none"
        )}
      >
        <p className="v-center gap-4  text-xl">
          <PlusCircle className="w-6 h-6" /> <span>Add a goal</span>
        </p>
        <p className="text-xs font-semibold">{time}</p>
      </section>
      <section
        className={cn(
          "flex-1 bg-white",
          isActive && "absolute w-full h-full top-[70px] left-0 px-2"
        )}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="v-center justify-between">
                    <span> Add title</span>
                    <span className="v-center gap-1">
                      <Checkbox />
                      No title
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[25px] border focus:ring-0"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="v-center justify-between">
                    <span>Sub task</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-[25px] border focus:ring-0"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="v-center gap-2 text-primaryDash mt-3 bg-transparent hover:bg-transparent hover:text-green-500 self-end"
              // variant="ghost"
              disabled={isLoading}
            >
              <PlusCircle />
              Add
            </Button>
          </form>
        </Form>
      </section>
    </section>
  );
};

export default DayTask;
