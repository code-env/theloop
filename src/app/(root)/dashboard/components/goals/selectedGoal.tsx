import { Goal } from "@/lib/types";
import React, { FC } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useOutsideClick } from "@/lib/useClickOutside";
import { X, Trash } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

interface SelectedGoalProps {
  selected: Goal | null;
  setSelectedGoal: (me: Goal | null) => void;
  initialGoals: Goal[];
}

const SelectedGoal: FC<SelectedGoalProps> = ({
  selected,
  setSelectedGoal,
  initialGoals,
}) => {
  //   const [selectedGoal, setSelectedGoal] = useState<Goal | null>();
  const ref = useOutsideClick(() => setSelectedGoal(null));

  const handleDeleteGoal = () => {
    const deletePromise = async () => {
      try {
        await axios.delete(`/api/goals/goal/${selected?.id}`);

        setSelectedGoal(null);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    };

    toast.promise(deletePromise, {
      loading: "Deleting...",
      success: (data: any) => {
        if (data?.msg === "deleted") {
          initialGoals.filter((goal) => goal?.date !== data?.deleted?.date);
        }

        return `Deleted`;
      },
      error: (error: any) => {
        console.log(error);
        return `something happend`;
      },
    });
  };

  // console.log(selected);
  return (
    <section
      className="2xl:w-[40%] 2xl:h-[90%] bg-white rounded-10 relative text-slate-300 p-4"
      ref={ref}
    >
      <section className="flex items-center justify-between">
        <p
          className={buttonVariants({
            variant: "ghost",
            className: "hover:text-gray-100",
          })}
        >
          #personal
        </p>
        <section className="flex items-center gap-4">
          <Button
            size="icon"
            variant="destructive"
            className="bg-transparent hover:bg-rose-500 hover:text-white"
            onClick={handleDeleteGoal}
          >
            <Trash />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-transparent hover:bg-gray-300 hover:text-black"
            onClick={() => setSelectedGoal(null)}
          >
            <X />
          </Button>
        </section>
      </section>
    </section>
  );
};

export default SelectedGoal;
