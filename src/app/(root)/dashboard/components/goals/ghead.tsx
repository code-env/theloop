"use client";

import React, { FC } from "react";
import { goalTypeVariant } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface goalHeadProps {
  activeGoalVarint: string;
  setActiveGoalVariant: (type: goalTypeVariant) => void;
}

const GoalsHeader: FC<goalHeadProps> = ({
  activeGoalVarint,
  setActiveGoalVariant,
}) => {
  const gt = ["Personal Goals", "Accelerator Goals", "Performance"];

  const handleClick = (variantType: string) => {
    setActiveGoalVariant(variantType as goalTypeVariant);
  };

  return (
    <section className="p-1 bg-neutral rounded-md flex gap-2">
      {gt.map((type) => (
        <Button
          key={type}
          variant="default"
          className={`flex-1 ${
            type === activeGoalVarint
              ? "bg-white text-primary font-semibold text-base hover:text-p"
              : "bg-transparent text-p"
          }`}
          onClick={() => handleClick(type)}
        >
          {type}
        </Button>
      ))}
    </section>
  );
};

export default GoalsHeader;
