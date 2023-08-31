"use client";

import React, { FC, useEffect, useState } from "react";
import DayTask from "./daytask";
import { nextdays as next3Days } from "@/lib/next-days";
import { formatDate, generateDatesArray } from "@/lib/dates/datesForAyear";
import axios from "axios";
import { userGoals } from "@/lib/types";
import Goal from "./goal";

interface PersonalGoalProps {
  userId: string;
}

const PersonalGoal: FC<PersonalGoalProps> = ({ userId }) => {
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const nextdays = next3Days();

  const [goals, setGoals] = useState<userGoals>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getThreeDaysGoal = async () => {
      try {
        const { data } = await axios.get(`/api/goals/${userId}`);

        setGoals(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getThreeDaysGoal();
  }, []);

  const handleUserClick = (index: number) => {
    if (index !== activeUserIndex) {
      setActiveUserIndex(index);
    }
    // setActiveUserIndex(index === activeUserIndex ? null : index);
  };

  const dates = generateDatesArray();

  return (
    <section className="contentspace overflow-x-auto  flex-1 scrollbar-thin scrollbar-thumb-gray-300">
      <section className="flex items-start gap-5">
        {goals.map(({ day, goal }, index) => {
          const convertedDate = formatDate(day);

          const testDate = convertedDate.split(",");

          const userDay = testDate[0];
          const userDate = testDate[1];

          return (
            <section key={index} className="flex-1 date-goal">
              <DayTask
                date={userDate}
                day={userDay}
                isActive={activeUserIndex === index}
                onClick={() => handleUserClick(index)}
              />
              <section>
                {goal.map((g, index) => {
                  // console.log(g);
                  return <Goal goalTask={g} key={index} />;
                })}
              </section>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default PersonalGoal;
