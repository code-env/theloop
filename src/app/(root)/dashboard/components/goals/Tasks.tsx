"use client";

// import { getUserGoals } from "@/lib/user.actions/getUserGoals";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import ThreeDayTaskSection from "./threeDayTaskSection";
import { userGoals } from "@/lib/types";

interface TasksProps {
  userId: string;
}

const Tasks: FC<TasksProps> = ({ userId }) => {
  const [goals, setGoals] = useState<userGoals>([]);
  const [isClient, setIsClient] = useState(false);

  // console.log(userId);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getThreeDaysGoal = async () => {
      try {
        const { data } = await axios.get(`/api/goals/${userId}`);

        setGoals(data);

        console.log("newGoals");
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getThreeDaysGoal();
  }, []);

  return (
    <section className="mt-6">
      <h1 className="header text-xl font-semibold ">Tasks</h1>
      <ThreeDayTaskSection goals={goals} />
    </section>
  );
};

export default Tasks;
