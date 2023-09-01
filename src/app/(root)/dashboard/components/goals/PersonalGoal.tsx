import React, { FC, useEffect, useState } from "react";
import DayTask from "./daytask";
import { nextdays as next3Days } from "@/lib/next-days";
import { formatDate, generateDatesArray } from "@/lib/dates/datesForAyear";
import axios from "axios";
import { userGoals, Goal as Goooal } from "@/lib/types";
import Goal from "./goal";

interface PersonalGoalProps {
  userId: string;
}

const PersonalGoal: FC<PersonalGoalProps> = ({ userId }) => {
  const [activeUserIndex, setActiveUserIndex] = useState<number | null>(null);
  const nextdays = next3Days();

  const [goals, setGoals] = useState<userGoals>([]);
  const [userGoalsF, setUserGoals] = useState<Goooal[]>([]);
  const [isNewGoal, setIsNewGoal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const getThreeDaysGoal = async () => {
      try {
        const { data }: { data: userGoals } = await axios.get(
          `/api/goals/${userId}`
        );

        setGoals(data);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    getThreeDaysGoal();
  }, [userId]);

  const handleUserClick = (index: number) => {
    if (index !== activeUserIndex) {
      setActiveUserIndex(index);
    }
  };

  useEffect(() => {
    // Merge all goal arrays into a single array
    const updatedUserGoals = ([] as Goooal[]).concat(
      ...goals.map((g) => g.goal)
    );

    // Sort the userGoalsF array by createdAt in ascending order (oldest to newest)
    updatedUserGoals.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      console.log(dateB.getTime() - dateA.getTime());

      return dateB.getTime() - dateA.getTime();
    });

    setUserGoals(updatedUserGoals);
  }, [goals]);

  console.log(userGoalsF);

  const handleChange = (newGoal: Goooal) => {
    if (newGoal) {
      setIsNewGoal(true);
      setUserGoals((prev) => [...prev, newGoal]);
    }
  };

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
                updated={handleChange}
              />
              <section className="contentspace">
                {isNewGoal
                  ? userGoalsF.map((g, index) => {
                      if (g.date !== day) return null;

                      return <Goal goalTask={g} key={index} />;
                    })
                  : goal.map((g, index) => {
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
